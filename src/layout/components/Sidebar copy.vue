<template>
    <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/loan-input" >
            <i class="el-icon-document"></i>
            <span slot="title">贷款申请</span>
          </el-menu-item>
           <el-menu-item index="/applicat-manage" >
            <i class="el-icon-document"></i>
            <span slot="title">申请管理</span>
          </el-menu-item>
          <!-- 有子级 -->
          <el-submenu index="/loan-approve">
            <template slot="title">贷款审批</template>
            <el-menu-item index="/loan-approve/first">初审</el-menu-item>
            <el-menu-item index="/loan-approve/end">终审</el-menu-item>
          </el-submenu>
          <!-- 有子级 -->
          <el-submenu index="/permission-manage">
            <template slot="title">贷款审批</template>
            <el-menu-item index="/permission-manage/first">初审</el-menu-item>
          </el-submenu>
          <el-menu-item index="/subject-manage" >
            <i class="el-icon-document"></i>
            <span slot="title">标的管理</span>
          </el-menu-item>
          
           <el-menu-item index="/jurisdiction-manage" >
            <i class="el-icon-document"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
            <el-menu-item index="/exprience-test" >
            <i class="el-icon-document"></i>
            <span slot="title">练习dome</span>
          </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>

export default {
  name: 'Home',
  methods:{

  }
}
</script>

<style>
</style>