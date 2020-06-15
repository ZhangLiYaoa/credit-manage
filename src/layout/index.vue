<template>
  <el-container>
    <!-- 侧边栏 -->
    <Sidebar />
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Navbar />
      </el-header>
      <!-- 主体 -->
      <Main />
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
// import Sidebar from './components/Sidebar'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
import {Sidebar,Navbar,Main} from './components'

export default {
  name: 'Home',
  methods:{
    goBack(){
      this.$router.push('/login');
    }
  },
  components:{
    Sidebar,
    Navbar,
    Main
  }
}
</script>

<style>
</style>