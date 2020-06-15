import Vue from 'vue'
import Vuex from 'vuex'

import {getToken} from '@/util/token'
import {getInfo} from '@/api/article'


Vue.use(Vuex)

const state = {
  token:getToken(),
  roles:[]  //角色
};
const getters={  //当组装的数据要在多个页面使用时，我们就可以用getters
  token: state => state.token,
  roles: state => state.roles,
};
const actions={  //执行异步操作 其终点就是提交mutation
  USERINFO({commit,state}){

    return new Promise((resolve,reject) =>{
      getInfo(state.token).then(res =>{
        console.log(333);
        console.log(res.data);

        const {data} = res.data;
        commit('SET_ROLES',data.roles)
        resolve(data)
      }).catch(error =>{
        reject(error)
      })
      

    })
  }

};
const mutations={
  SET_ROLES:(state,roles) =>{
     state.roles = roles
  }
};

export default{
  state,
  getters,
  mutations,
  actions
}
