<template>
  <div class="box">
    <!-- <h1>组件导入</h1> -->
    <!-- 局部 -->
    <!-- <cpt1></cpt1> -->


    <!-- 所谓调用函数:传实参 (组件通信)-->
    <!-- <cpt4 title="超级好吃的杨幂" price="89" num="8"></cpt4>
    <cpt4 title="超级好吃的杨紫" price="89" num="8"></cpt4>
    <cpt4 title="超级好吃的小孩" price="89" num="8"></cpt4>
    <cpt4 :title="title" :price="price" :num="num"></cpt4> -->

    <!-- 商品数据:后台给的list数组对象 -->
    <p v-for="item in list" :key="item.title">{{item.title}} 库存：{{item.kc}} </p>
    <hr>
    <cptn4
      v-for="item in list" 
      :key="item.id" 
      :item="item"

    ></cptn4>
    <!-- <cpt5></cpt5> -->
  </div>
  
</template>

<script>
import cpt1 from "./components/01-cpt.vue"

import cpt4 from "./components/04-cpt.vue"
import cptn4 from "./components/04-cptn.vue"

import cpt5 from "./components/05-cpt.vue"
export default {
  data(){
    return{
      title:"螺蛳粉",
      price:15,
      num:2,
      list:[
        {
          id:1,
          title:'第一道菜',
          price:12,
          num:8,
          kc:132
        },
        {
          id:2,
          title:'第二道菜',
          price:12,
          num:8,
          kc:142
        },
        {
          id:3,
          title:'第三道菜',
          price:12,
          num:8,
          kc:152
        },
        {
          id:4,
          title:'第四道菜',
          price:12,
          num:8,
          kc:162
        },
        {
          id:5,
          title:'第五道菜',
          price:12,
          num:8,
          kc:172
        },
      ]
    }
  },
  components:{cpt1,cpt4,cptn4,cpt5},
  methods:{
      sbq(id){
        //业务:find把符合条件成员单独挑出来,新数组
        let i = this.list.findIndex(ele=>ele.id == id);
        this.list[i].kc--;
      }
  }
}
</script>

<style lang="less">
 
</style>