<template>
  <div>
    <h1>$refs</h1>
    <p ref="nav">原因1：某些业务用vue语法绕的远，webapi DOM操作反而非常简单!</p>
    <p id="box">原因2：后期有很多elmentUI(PC)  vant(移动) 封装好组件，也用1refs知识!</p>

    <div ref="demo">我是个div标签</div>
    <button @click="get">获取p标签</button>
  </div>
</template>

<script>
export default {
  methods:{
    get(){
      //直接写webapi代码：基于浏览器 BOM+DOM(不推荐)
      // const p = document.querySelector('#box');
      // console.log(p);

      //ref="nav" vue 给标签设置所谓id值    this.$refs相当于：document.querySelector
      // console.log(this.$refs.nav);
      console.log(this.$refs.demo);

      //业务:

    }
  }
}
</script>

<style>

</style>