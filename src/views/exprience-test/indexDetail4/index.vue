<!-- 组件说明 -->
<template>
  <div class='warpper'>
    <div>
      <span v-cloak>v-clock解决闪烁</span>
      <span v-html="messges"></span>
      <span v-text="messges1"></span>
    </div>
    <div>
    </div>
    <div></div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        messges:'v-html的使用',
        messges1:'v-text的使用'
      };
    },
    computed: {

    },
    methods: {

    },
mounted() {

},

  }
</script>
<style>
[v-cloak]{
  display: none;
}
</style>