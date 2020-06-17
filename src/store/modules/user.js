
import {getToken,removeToken} from '@/util/token'
import {getInfo,logout} from '@/api/article'




const state = {
  token:getToken(),
  roles:[]  //角色
};
const getters={  //当组装的数据要在多个页面使用时，我们就可以用getters
  token: state => state.token,
  roles: state => state.roles,
};
const actions={  //执行异步操作 其终点就是提交mutation
  USERINFO({commit,state}){  //获取用户详情
    return new Promise((resolve,reject) =>{
      getInfo(state.token).then(res =>{
        console.log(333);
        console.log(res.data);

        const {data} = res.data;
        commit('SET_ROLES',data.roles)  //将用户角色进行存储
        resolve(data)
      }).catch(error =>{
        reject(error)
      })
    })
  },

  LOGOUT({commit,state}){  //退出
    return new Promise((resolve,reject) =>{
      logout(state.token).then(res =>{
       
        commit('SET_ROLES',[])  //将用户角色进行清空
        commit('SET_TOKEN','')   //清空state中的token
        removeToken()  //删除token
        resolve()
      }).catch(error =>{
        reject(error)
      })
    })
  }

};
const mutations={
  SET_ROLES:(state,roles) =>{
     state.roles = roles
  },
  SET_TOKEN:(state,token) =>{
    state.token = token
 },

};

export default{
  state,
  getters,
  mutations,
  actions
}
