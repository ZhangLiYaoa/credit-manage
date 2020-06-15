<!-- 图表组件 -->
<template>
  <div class='chart-warpper'>
     <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div style="width: 600px;height:400px;"
      ref="chart1"
    ></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  // import axios from 'axios'
  import 'echarts/map/js/china'
  export default {
    name:'MapsBox',
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {
      init(){
         // 基于准备好的dom，初始化echarts实例
        // var myChart = echarts.init(document.getElementById('main'));
        var myChart = echarts.init(this.$refs.chart1);
        // 指定图表的配置项和数据
        var option = {
           title: {
            text: '中国地图'
        },
   
    series: [
      {
        type:'map',
        map:'china'
      }
    
    ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

      },
      //自己自定义一个接口
      getList(){
        // axios.get('').then(res =>{

        
          
        // })
      }

    },
mounted() {
    this.init()
  
  //this.getList()

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