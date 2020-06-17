<!-- 组件说明 -->
<template>
  <div class="">
    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="addDetail" >
      跳转
      </el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="addDetail3" >
      跳转
      </el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="addDetail4" >
      跳转
      </el-button>
    <div class="test-heading">
      <h1>我的购物清单列表</h1>
      <span
        >清单总数
        <span>{{lists.length}}</span>
      </span>
    </div>
    <div>
      <el-input 
      v-model="addValue.name"
      
       placeholder="请输入姓名" style="width: 200px;" class="filter-item" 
       />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="add" 
      :disabled="!addValue.name">
        添加
      </el-button>
      
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>清单名称</th>
            <th>状态</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list,index) in lists" :key="index">
            <td>{{list.name}}</td>
            <td>{{list.state | stateFilter}}</td>
            <td><el-button class="filter-item" type="warning" icon="el-icon-search" @click="dele(index)">删除</el-button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      指令学习 v-on v-bind v-show v-if
    </div>
    <div>
      <h1>单击{{age}}</h1>
      <button @click="age=25">点击</button>
      <button @click="action">点击1</button>
      <button @click="action2(30)">点击2</button>

    </div>
     <div>
      <h1>双击{{age}}</h1>
      <button @dblclick="age=25">点击</button>
      <button @dblclick="action">点击1</button>
      <button @dblclick="action2(30)">点击2</button>

    </div>
     <div>
      <h1>移入移出{{age}}</h1>
      <button @mouseover="action2(15)" @mouseout="action2(60)">点击2</button>

    </div>
    <div>
      <!-- keydown keyup -->
      <h1>键盘事件{{age}}</h1>
      <button @keydown.enter="action2(15)">点击2</button>
      <button @keydown.ctrl.c="active2(18)">键盘事件</button>

    </div>

  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      age:20,
      addValue:{
        name:''
      },
      lists: [
        {
          name: "手机",
          state: false,
        },

        {
          name: "电脑",
          state: false,
        },
        {
          name: "包包",
          state: true,
        },
      ],
    };
  },
  filters: {
    stateFilter(data){
      if (data) return '采购中'
      else return '未采购'
    }
  },
  computed: {},
  methods: {
    add(){
      if (!this.addValue.name) return;
      this.lists.unshift({name:this.addValue.name,state:false});
      this.addValue.name = '';
    },
    dele(d){
      this.lists.splice(d,1) //d表示位置  1表示个数
    },
    action(){ //不传递参数
      this.age  = 10
    },
    action2(d){  //传递参数
      this.age = d
    },
    addDetail(){
      this.$router.push({name:'exprience-test-detail'})
    },
    addDetail3(){
      this.$router.push({name:'exprience-test-detail3'})
    },
    addDetail4(){
      this.$router.push({name:'exprience-test-detail4'})
    }
  },
  mounted() {},
};
</script>

<style></style>
