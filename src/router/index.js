import Vue from "vue";
import VueRouter from "vue-router";

import loanApprove from './modules/loanApprove'
import permissionManage from './modules/permissionManage'

Vue.use(VueRouter);

//解决vue-router在3.0版本以上重复点菜单报错问题 push如果不成功改为replace
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//通过角色配置动态路由 
//路由分为两模块
//常规配置  动态配置
export const constantRouters = [ //常规配置
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index"),
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home",
    component: () => import("../layout/index"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title:'首页',roles:['input','approve'] },
        component: () => import("../views/home/index"),
      }]
  }
]

export const asybcRouters = [ //动态配置
  {
    path: "/home",
    name: "home",
    meta: { title:'首页',roles:['input','approve'] },
    component: () => import("../views/home/index"),
  },
  {
    path: "/loan-input",
    name: "loan-input",
    meta: { title:'贷款申请',roles:['input'] },
    component: () => import("../views/loan-input/index"),
  },
  {
    path: "/applicat-manage",     //申请管理
    name: "applicat-manage",
    meta:{title:'申请管理',roles:['input']},
    component: () => import("../views/applicat-manage/index"),
  },
  loanApprove,
  {
    path: "/subject-manage",     //标的管理
    name: "subject-manage",
    meta:{title:'标的管理',roles:['input']},
    component: () => import("../views/subject-manage/index"),
  },
  
  {
    path: "/jurisdiction-manage",     //权限管理
    name: "jurisdiction-manage",
    meta:{title:'权限管理',roles:['input']},
    component: () => import("../views/jurisdiction-manage/index"),
  },
  {
    path: "/exprience-test",     //练习dome
    name: "exprience-test",
    meta:{title:'练习dome',roles:['input']},
    component: () => import("../views/exprience-test/index"),
   
  },
  {
    path: "/exprience-test-detail",     //练习dome
    name: "exprience-test-detail",
    meta:{title:'练习dome',roles:['input']},
    component: () => import("../views/exprience-test/indexDetail"),
   
  },
  {
    path: "/exprience-test-detail3",     //练习dome
    name: "exprience-test-detail3",
    meta:{title:'练习dome',roles:['input']},
    component: () => import("../views/exprience-test/indexDetail3"),
   
  },
  {
    path: "/exprience-test-detail4",     //练习dome
    name: "exprience-test-detail4",
    meta:{title:'练习dome',roles:['input']},
    component: () => import("../views/exprience-test/indexDetail4/index"),
  },
  permissionManage

];

const router = new VueRouter({
  mode: 'history',
  routes:constantRouters,
});


export default router;
