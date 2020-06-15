<!-- 标的管理 -->
<template>
  <div class='container'>
     <div class="container-header">
       <el-input 
       placeholder="请输入查询的名字"
       style="width:200px;"
       ></el-input>
       <el-button class="button-item" type="primary">搜索</el-button>
       </div>  
       <div class="container-table">
         <el-table 
        :data="tableData"
         >
         <el-table-column
         prop="loan_name"
         label="姓名"
         width="200"
         column-key="loan_name"
         ></el-table-column>
           <el-table-column
         prop="loan_card"
         label="身份证"
         width="250"
         ></el-table-column>
           <el-table-column
         prop=""
         label="合同状态"
         width="250"
         >
         <template slot-scope="scope">
           <el-tag :type="scope.row.file_path | getStatesPathStyle">{{scope.row.file_path | getStateData}}</el-tag>
         </template>
         </el-table-column>
         <el-table-column
         prop=""
         label="操作"
         width="250"
         >
         <template slot-scope="{row}">
           <el-button size="mini" type="primary"
           @click="handleCreate(row)"
          
           >生成合同</el-button>
            <el-button 
            size="mini"
            type="danger"
            
            @click="handleDownLoad(row)">下载合同</el-button>

         </template>
         </el-table-column>
         </el-table>
       </div>
  </div>
</template>

<script>
  import {contractList,contractCreateFile,contractDownload} from '@/api/article'
  import {getToken} from '@/util/token'
  export default {
    name:'subjectManage',
    components: {

    },
    filters:{
      getStatesPathStyle(data){
       if (data) return 'success' 
       else return 'info'
      },
      getStateData(data){
        if(data) return '已生成合同'
        else return '未生成合同'
      }
    },
    data () {
      return {
        list:'',
        tableData:[],
        listQuery:{
          name:'', //查询条件
          pageNo:1, //当前页码
          pageSize:10, //条数
        },
        rows:'',
        pages:''

      };
    },
    computed: {

    },
    methods: {
        getList(){  //获取数据
      contractList(this.listQuery).then(res=>{
        let {code} = res.data;
        if(code=='20000'){
          let {data,rows,pages} = res.data.data.data;
          this.tableData = data;  //列表展示
          this.rows = rows;  //总条数
          this.pages = pages;  //总页数
        }
      })
    },
    //生成合同
    handleCreate(row){
      contractCreateFile({id:row.id}).then(res =>{
          let {code} = res.data;
           if (code == '20000') { 
             this.getList();
             this.$notify({
               title:'生成合同',
               mseeage:'生成合同成功',
               type:'success',
               duration:2000
             });
           }
      })
      
    },
    handleDownLoad(row){
      contractDownload({id:row.id}).then(res =>{
        console.log(res);
         let {data,code} = res.data;
         if (code == '20000') {
           this.$notify({
             title:'下载合同',
             message:'下载合同成功',
             type:'success',
             duration:2000
           });
         }
         console.log('http://139.196.42.209:5004'+data.url);
         var _url = 'http://139.196.42.209:5004'+data.url;
         this.downLoadFile(_url)
      })

    },
    downLoadFile(url){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url)

      xhr.responseType = 'blob'   //字节流

      xhr.setRequestHeader('token',getToken())

        xhr.onload = ()=>{
        if(xhr.status==200){
          console.log(xhr.response,9999);
           var filename = xhr.responseURL.substring(xhr.responseURL.lastIndexOf("/")+1);
          this.saveAs(filename,xhr.response)
        }
      };
      xhr.send()
    },
      saveAs(name, data) {
        var urlObject = window.URL;  //window对象的URL对象是专门用来将blob或者file读取成一个url的。
        var export_blob = new Blob([data]); //代表二进制类型的大对象,就是Blob对象是二进制数据
        // <a href="12345.jpg" download="名称" >
        var save_link = document.createElement('a');//创建a标签
        save_link.href = urlObject.createObjectURL(export_blob); //通过URL.createObjectURL(blob)可以获取当前文件的一个内存URL
        //download是 HTML5 中<a>标签新增的一个属性，此属性会强制触发下载操作，指示浏览器下载 URL 而不是导航到它，并提示用户将其保存为本地文件
        save_link.download = name;
        save_link.click();//触发a标签单击
    }
    },
mounted() {
  this.getList()

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style>
</style>