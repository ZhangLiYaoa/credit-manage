<!-- 组件说明 -->
<template>
  <div class=''>
    详情页
  <h1 v-show="true">v-show</h1>
  <h1 v-show="flag">flag</h1>

  <h1 v-if="n==12">12</h1>
  <h1 v-else-if="n==18">18</h1>
  <h1 v-else>12</h1>
  
  <h1 v-if="func">通过函数</h1>
    <div>
      1.遍历数组
      <ul>
        <li v-for="v in arr" :key="v">{{v}}</li>
      </ul>
     2. 遍历对象  
      <!-- K 键 -->
       <ul>
        <li v-for="(v,k) in obj" :key="k">{{v}}===={{k}}</li>
      </ul>
      3. 遍历数组对象
     <ul>
        <li v-for="(v,k) in arrObj" :key="k">{{v.name}}===={{v.age}}</li>
      </ul>

      4.遍历数值
         <ul>
        <li v-for="(v,k) in number" :key="k">{{v}}遍历数值{{k}}</li>
      </ul>
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
        n:18,
        flag:true,
        arr:[1,2,3,4,5,6],
        obj:{name:'zhang',age:18},
        arrObj:[{name:'zhang',age:18},{name:'zhang',age:18}],
        number:10

      };
    },
    computed: {

    },
    methods: {
      func(){
        return true
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
</style>