//处理js封装方法  模块化处理
import axios from 'axios' 
import { Message } from 'element-ui';

import {getToken} from '@/util/token'
axios.defaults.baseURL = 'http://139.196.42.209:5004/api/'

//请求拦截器
axios.interceptors.request.use(function(config){
  //在发送请求之前做什么

  //config.header['token'] = getToken();    //在发送请求前拿到token
  config.headers['token'] = getToken();

  console.log(getToken());

  return config;

},function(error){
  //对请求错误做些什么
  return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(function(response){
  //对响应数据做些什么
 if (response.data.code !== 20000) {
   if (response.data.code == 10001) {
    Message({
      type:'warning',
      message:'token 不存在 请重新登录',
      duration:2000
    })
   }else{
    Message({
      type:'warning',
      message:response.data.message,
      duration:2000
    })
   }
 
 }else{
 }
  return response
},function(error){
  //对响应错误做些什么

  // Message({
  //   type:'success',
  //   message:error.message,
  //   duration:2000
  // })
  return Promise.reject(error)
})
export default axios    //直接返回axios

