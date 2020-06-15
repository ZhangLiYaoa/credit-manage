//路由拦截

import router from './router'
import store from './store'

//路由跳转前执行
//beforeEach 三个参数
//to 即将进入的路由
//from 即将离开
//next 下一个 管道钩子
router.beforeEach(async(to, from, next) => {
  //1.是否是登录页
  if (to.path == '/login') {
    next()
  }else{
    //获取登录用户信息
    //角色 ： 管理员 销售人员 初审人员
    //正常跳转 vuex中获取角色
    var hasRoules = store && store.getters.roles && store.getters.roles.length >0;
    console.log(hasRoules,1111);
    
   if (hasRoules) {
      next() //有角色  路由拦截
   }else{
      

     let {roles} = await store.dispatch('USERINFO')
     console.log(roles,222); 
      if (roles) {
        next({...to})
      }else{
        next({path:'/login'})
      }
   }

  }
})
