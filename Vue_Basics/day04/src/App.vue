<template>
  <section class="todoapp">
    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="输入新计划" autofocus @keydown.enter="add" v-model.trim="name" />
    </header>

    <!-- 列表： -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="ck" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">

        <todo v-for="item in list" :key="item.id" :item="item" @aaa="del"></todo>
      </ul>
    </section>

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>{{last}}</strong>未完成 </span>
      <ul class="filters">
        <li>
          <a href="#/" :class="{selected:con=='all'}">全部</a>
        </li>
        <li>
          <a href="#/active" :class="{selected:con=='und'}">未完成</a>
        </li>
        <li>
          <a href="#/completed" :class="{selected:con=='done'}">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clear">清除已完成</button>
    </footer>





  </section>
</template>


<script>
import "./todos.css"; // 导入css模块！
import todo from "./components/todo.vue";
export default {
  components: {
    todo,
  },
  data() {
    return {
      // list: [
      //   { id: 1, name: "吃饭", isDone: true },
      //   { id: 2, name: "睡觉", isDone: false },
      //   { id: 3, name: "打豆豆", isDone: true },
      // ],
      list:JSON.parse(localStorage.getItem("todos"))||[],
      name:"", // 获取输入框的值
      con:'done',
    };
  },
  methods:{
    // 收信号：id
    del(id){
      let i = this.list.findIndex(ele=>ele.id==id);
      this.list.splice(i,1);
    },
    // 新增
    add(){
      if (this.name=="") {
        return;
      }

      // 1.准备对象：id name isDone
      let one = {
        id:Math.random(),
        name:this.name,
        isDone:false,// 默认没有完整的计划
      }

      // 2、对象添加到数组
      this.list.push(one);

      // 3、输入框置空
      this.name="";
    },
    
    // 清空已完成
    clear(){  
      // 把没有完成的筛选，赋值给this.list;
      this.list = this.list.filter(ele=>ele.isDone==false);
    }
  },
  computed:{
    last(){ // 剩余个数
      // 筛选没有完成数组的长度
      return this.list.filter(ele=>ele.isDone==false).length;
    },
    // 大小选
    ck:{
      get(){
        return this.list.every(ele=>ele.isDone==true);
      },
      set(val){
        this.list.forEach(ele=>ele.isDone=val);
      }
    }
  },
  watch:{
    list:{
      deep:true, 
      handler(){
        localStorage.setItem("todos",JSON.stringify(this.list));
      }
    }
  }
};
</script>


<style scoped>
</style>
