<template>
  <div class="app">
    <h1>key绑定更新策略</h1>
    <button @click="add">新增一个成员</button>
    <ul>
      <li v-for="(item,i) in list" :key="i">
        姓名:{{item.name}}    年龄:{{ item.age }}
      </li>
    </ul>

    <hr>

    <ul>
      <li v-for="item in list" :key="item.id">
        姓名:{{item.name}}    年龄:{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {id:1,name:'杨幂',age:33},
        {id:2,name:'杨紫',age:34},
        {id:3,name:'金晨',age:35},
        {id:4,name:'热巴',age:26},
        {id:5,name:'娜扎',age:27},
      ]
    }
  },
  methods:{
    add(){
      // 往list内部添加一个新的成员！
      let one = {
        // id：模拟后台数据，id为了数据与数据之间区分！不一定非得是整数！
        id: Math.random(),  
        name:"新来的",
        age:19
      };


      // 添加到数组 第二位置   操作的下标，删除个数
      this.list.splice(1,0,one);
    }
  }
}
</script>
  
<style lang="less">
.app{
  text-align: center;
}
*{margin: 0;padding: 0;}
div{
  font-size: 25px;
  li{
    list-style: none;
  }
}
</style>