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
    //退出时需要清空vuex中的角色信息  在vuex中进行统一管理
    goBack(){

    //每次退出时都会触发 
    this.$store.dispatch('LOGOUT').then(res =>{
        this.$router.push('./login')
      }
    )


      // logout().then(()=>{
      //    removeToken()  //删除token
      // // /sessionStorage.removeItem('token')
      // this.$router.push('/login');

      // })
     
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