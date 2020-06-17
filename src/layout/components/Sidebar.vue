<template>
    <el-aside width="200px">
        <el-menu router>
         <SidebarItem 
         v-for="route in get_routers[0].children" 
         :key="route.path"
         :item="route"
         :base-path="route.path"
         />
        </el-menu>
    </el-aside>
</template>


<script>
import {mapGetters} from 'vuex' 
import SidebarItem from './SidebarItem'

export default {
  methods:{

  },
  computed:{
    ...mapGetters(['get_routers'])
  },
  components:{
    SidebarItem
  }
}
</script>

<style>
</style>