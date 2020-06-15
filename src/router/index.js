import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//解决vue-router在3.0版本以上重复点菜单报错问题 push如果不成功改为replace
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
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
        component: () => import("../views/home/index"),
      },
      {
        path: "/loan-input",
        name: "loan-input",
        component: () => import("../views/loan-input/index"),
      },
      {
        path: "/applicat-manage",     //申请管理
        name: "applicat-manage",
        component: () => import("../views/applicat-manage/index"),
      },
      {
        path: "/loan-approve",
        name: "loan-approve",
        component: () => import("../views/loan-approve/index"),
        children: [
          {
            path: "/loan-approve/first",
            name: "first",
            component: () => import("../views/loan-approve/first"),
          },
          {
            path: "/loan-approve/end",
            name: "end",
            component: () => import("../views/loan-approve/end"),
          },
        ],
      },
      {
        path: "/subject-manage",     //标的管理
        name: "subject-manage",
        component: () => import("../views/subject-manage/index"),
      },
      
      {
        path: "/subject-manage",     //标的管理
        name: "subject-manage",
        component: () => import("../views/subject-manage/index"),
      },
      {
        path: "/jurisdiction-manage",     //权限管理
        name: "jurisdiction-manage",
        component: () => import("../views/jurisdiction-manage/index"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


export default router;
