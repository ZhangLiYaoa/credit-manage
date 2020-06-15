import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
//import axios from 'axios';  
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'

//路由拦截
import './permission'

//首先导入全局过滤器
import * as filters from './filters/index'

Vue.use(ElementUI);


Vue.config.productionTip = false
//axios.defaults.baseURL = 'http://139.196.42.209:5004/api/';
//Vue.prototype.$http = axios; 


//定义全局过滤器
//首先拿到对应的key，进循环
Object.keys(filters).forEach(key =>{
  Vue.filter(key,filters[key])
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
