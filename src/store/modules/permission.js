//获取动态路由
import {constantRouters,asybcRouters} from '@/router'
import router from '../../router'

 function filterAsyncRouter(routes,name) { //过滤对应角色
  console.log(routers);
    var data = router.filter(route =>{
      return route.meta && route.mata.roules && name.some( n =>route.meta.roules.includes(n))

      //先判断有没有属性，再判断有没有角色消息  在进行判断当前的名字是否包含某个值
    })
    return data;
}


const state = {
 routers:[]  //获取动态luyou
};
const getters={  //当组装的数据要在多个页面使用时，我们就可以用getters
  get_routers: state => state.routers,
};
const actions={  //执行异步操作 其终点就是提交mutation
  SETROUTERS({commit,state},routersName){  //通过角色过滤lvyou
    return new Promise((resolve,reject) =>{
      //设置一个变量  为路由地址   
      var _routers;  //返回的路由对象

      //获取首页值

      let home = constantRouters.filter(v =>v.path == '/home')[0]  //返回数组[0]返回对象
      console.log(home);

      //每次获取home值后最好进进行清空
      home.children = [];

    
      if (routersName.includes('administrator')) {  //判断是否是管理员登录

        home.children = asybcRouters
        
      }else{
     //如果不是管理员  拿到过滤之后的路由
     let filterRouter = filterAsyncRouter(asybcRouters,routersName);
     home.children = filterRouter


      }

      _routers = [home] || []

      commit('SET_ROUTERS',_routers)

      resolve(_routers);
     
    })
  },
};
const mutations={
  SET_ROUTERS:(state,routers) =>{
     state.routers = routers
  },
 

};

export default{
  state,
  getters,
  mutations,
  actions
}
