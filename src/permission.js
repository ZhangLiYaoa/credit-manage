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
    
   if (hasRoules) {  //通过角色 判断是否登过
      next() //有角色  路由拦截
   }else{  //没有登过 先发送请求获取对应的信息
     let {roles} = await store.dispatch('USERINFO') //获取角色 发送对应的请求

     //获取角色 roles: [{id: 1, name: "administrator"}]
     let roleName = roles.map(r => r.name) //取出name属性

     //将名字传进去进行匹配  传入对应角色 返回动态路由结果

     //如何拿到动态路由
     let asyncRouter = await store.dispatch('SETROUTERS',roleName)  //将它存到状态中方便左侧导航获取
     console.log(asyncRouter);
  
     router.addRoutes(asyncRouter); //动态路由追加

     //console.log(roleName);
     console.log(roles,222); 
      if (roles) {
        next({...to})
      }else{
        next({path:'/login'})
      }
   }

  }
})
