const permissionManage = {
   path: '/permission-manage',
    name:'permission-manage',
    meta:{title:'权限管理',roles:['input']},
  component:() => import("@/views/permission-manage/index"),
  children:[
    {
        path: "/permission-manage/first",
        name:'first',
        meta:{title:'权限管理',roles:['input']},
        component: () =>import("@/views/permission-manage/first")}
    
  ] 

}
export default permissionManage