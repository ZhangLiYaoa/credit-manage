<template>
    <div>
          <el-menu-item :index="basePath" v-if="!item.children">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
          
          <!-- 有子级 -->
          <el-submenu :index="basePath" v-else>
            <template slot="title">{{item.meta.title}}</template>

<!-- 
            <el-menu-item index="/loan-approve/first">初审</el-menu-item>
            <el-menu-item index="/loan-approve/end">终审</el-menu-item> -->

      <sidebarItem  v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="child.path"
      />

    </el-submenu>
    </div>
   
</template>

<script>

export default {
  name: 'sidebarItem',
  props:['item','basePath'],
  methods:{

  },
  computed:{
    
  },
  components:{
    // SidebarItem
  }
}
</script>

<style>
</style>