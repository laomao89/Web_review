<template>
  <div class="box">
    <h1>标题:{{title}}</h1>
    <p>价格:{{price}}</p>
    <p>开业大酬宾，全场{{num}}折</p>
    <h4>库存：{{kc}} 件 </h4>
    <button @click="fn">卖一件</button>
  </div>
</template>

<script>
export default {
  //所谓特别封装如何设置形参
  props:["title","price","num","kc","id"],     //设置形参:名是字符串！语法固定！

  methods:{
    fn(){
      this.$emit('ym',this.id);
    }
  }
}
</script>

<style scoped> 
.box{
  border: 2px solid yellowgreen;
}

</style>