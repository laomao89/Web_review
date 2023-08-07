<template>
  <div class="box">
    <h1>标题:{{item.title}}</h1>
    <p>价格:{{item.price}}</p>
    <p>开业大酬宾，全场{{item.num}}折</p>
    <h4>库存：{{item.kc}} 件 </h4>
    <!-- 2.使用形参 -->
    <button @click="item.kc--">卖一件</button>     
  </div>
</template>

<script>
export default {
  props:['item'],   //1.设计形参

}
</script>   

<style scoped> 
.box{
  border: 2px solid blue;
  background: red;
}

</style>