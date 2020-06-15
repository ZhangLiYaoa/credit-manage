<template>
    <div class="header-warpper">
      <span @click="goBack()">退出
         <i class="el-icon-arrow-down"></i>
      </span>
    </div>  
</template>

<script>
import {removeToken} from '@/util/token'
import {logout} from '@/api/article'

export default {
  name: 'Home',
  methods:{
    goBack(){
      logout().then(()=>{
         removeToken()  //删除token
      // /sessionStorage.removeItem('token')
      this.$router.push('/login');

      })
     
    }
  }
}
</script>

<style scoped>
.header-warpper{
  display: flex;
  justify-content: flex-end;
  box-shadow: 2px 2px 2px 2px #99BBFF;
} 
</style>