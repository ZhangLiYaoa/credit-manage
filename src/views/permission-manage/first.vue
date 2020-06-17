<!-- 组件说明 -->
<template>
  <div class=''>
    <!-- <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition> -->
  <button @click="show !=show">toggle</button>
   <transition name="abc" enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
     <p v-if="show">hello</p>
   </transition>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        show:false

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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>