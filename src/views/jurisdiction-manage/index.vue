<!-- 权限管理 -->
<template>
  <div class=''>
    <!-- 方法yi -->
  <!-- <ul class="tab-tit">
    <li :class="n==1?'active':''"  @click="onChangge(1)">标题1</li>
    <li  :class="n==2?'active':''" @click="onChangge(2)">标题2</li>
    <li  :class="n==3?'active':''" @click="onChangge(3)">标题三</li>
  </ul> -->
   <!-- 第二种方法 -->
   <ul class="tab-tit">
     <li v-for="(v,index) in listObject" 
     :class="two==index?'active':''"
     :key="index" @click="addTwo(index)">{{v.title}}</li>
   </ul>
  <!-- <div class="tab-con">
    <div v-show="n==1">内容一

      频繁操作dom 使用v-show
    </div>
    <div v-if="n==2">2</div>
    <div v-if="n==3">3</div>
  </div> -->

  <div class="tab-con">
    <div  v-for="(c,i) in listObject" :key="i" v-show="two==i">
      {{c.content}}
    </div>
  </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        n:1,   //设置变量,来控制数据的驱动
        two:0,
        title:['导航一','导航二','导航三'],
        listObject:[{
        title:'daohangi',
        content:'neirongyi'
        },
        {
        title:'daohaner',
        content:'neironger'
        }]




      };
    },
    computed: {

    },
    methods: {
      onChangge(i){
        this.n = i
      },
      addTwo(index){
        this.two = index
      }

    },
mounted() {

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
ul,li {
    	padding:0;
    	margin:0;
    }
    .tab-tit li{
        padding: 10px 15px;
	    text-align: center;
	    list-style:none;
	    cursor:pointer;
		display: inline-block;
    }
    .tab-tit .active{
        color: #09f;
    	border-bottom: 1px solid #09f;
    }
    .tab-con div{
        margin:30px;
    }
</style>