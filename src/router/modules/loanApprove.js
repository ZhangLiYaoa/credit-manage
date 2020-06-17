//贷款审批路由

const loanApprove =  {
    path: "/loan-approve",
    name: "loan-approve",
    component: () => import("@/views/loan-approve/index"),
    meta:{title:'贷款审批',roles:['input']},
    children: [
      {
        path: "/loan-approve/first",
        name: "first",
        meta:{title:'贷款审批',roles:['input']},
        component: () => import("@/views/loan-approve/first"),
      },
      {
        path: "/loan-approve/end",
        name: "end",
        meta:{title:'贷款审批',roles:['input']},
        component: () => import("@/views/loan-approve/end"),
      },
    ],
  }

  export default loanApprove