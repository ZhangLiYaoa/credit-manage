<!-- 组件说明 -->
<template>
  <div class='home-warpper'>
    <div class="count-box">
          <NumberBox/>
    </div>
    <div class="echart-box">
      <chartsBox/>
      <MapBox/>
    </div>
  </div>
</template>

<script>
  import ChartsBox from './components/ChartsBox'
   import NumberBox from './components/NumberBox'
     import MapBox from './components/MapBox'
  export default {
    components: {
      ChartsBox,
      NumberBox,
      MapBox
    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

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

<style lang="scss" scoped >
.home-warpper {
  display: columns;
  .count-box{
    display: flex;
    
  }
  .echart-box{
    margin-top: 30px;
    
    display: flex;
  }
}
</style>