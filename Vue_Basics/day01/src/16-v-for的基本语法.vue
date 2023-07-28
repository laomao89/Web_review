<template>
  <div>
    <ul>
      <li v-for="(item,i) in list" :key="i">
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
  }
}
</script>
  
<style lang="less">
*{margin: 0;padding: 0;}
div{
  font-size: 25px;
  li{
    list-style: none;
  }
}
</style>