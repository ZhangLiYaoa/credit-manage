<!-- 组件说明 -->
<template>
  <el-row class="number-warpper">
    <el-col :xs="12" :sm="12" :lg="6" class="wapper-panel" v-for="(item, index) in newListData" :key="index">
      <div class="panel-description" :style="{background:item.color}">
        <div class="panel-description-box">
           <span class="description">
          {{ item.name }}
        </span>
        <countTo
          :startVal="item.startVal"
          :endVal="item.endVal"
          :duration="item.duration"
        />

        </div>
       
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to"; //数字滚动插件
export default {
  name: "NumberBox",
  components: {
    CountTo,
  },
  data() {
    return {
      startVal: 0,
      endVal: 2020,
      newListData:[],
      listData: [
        {
          startVal: 0,
          endVal: 2020,
          duration: 3000,
          name: "最高可解金额",
        },
        {
          startVal: 0,
          endVal: 2020,
          duration: 3000,
          name: "回报率",
        },
        {
          startVal: 0,
          endVal: 2020,
          duration: 3000,
          name: "回报率",
        },
        {startVal:0,endVal:6666,duration:2000,name:'安稳底薪站队'}
      ],
    };
  },
  computed: {

  },
  methods: {
    listDataFilter(){
      // let newListData  = []
       this.listData.map(item =>{
         this.newListData.push(Object.assign({},item,{color: getRander()}))
        //  this.$set(this.newListData,'color',getRander())
      })
       //return newListData
       function getRander(){
          return '#'+Math.floor(Math.random()*16777215).toString(16); 
    }
      console.log(this.newListData);
    }
  },
  created(){
   //this.listDataFilter()
  },
  mounted() {
    this.listDataFilter()
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.number-warpper {
  display: flex;
}
.panel-description {
  width: 300px;
  height: 200px;

  .panel-description-box{

  }
}
  .wapper-panel{
    margin-left: 10px;
  }
</style>
