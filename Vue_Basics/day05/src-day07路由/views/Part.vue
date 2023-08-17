<template>
  <div>
    <h1>Part组件</h1>
    <p>人名1：{{$route.query.ym}}</p>
    <p>人名2：{{$route.params.yz}}</p>
  </div>
</template>

<script>
export default {
  // 2、接受数据 VueRouter插件 Vue.use(VueRouter)
      // 接下来所有Vue组件 this上有个属性 this.$route
      // this.$route.query 可以获取到 ?形式传入的数据
      // 函数内部：this.$route.query.name
  created(){
    console.log(this.$route.query);
    console.log(this.$route.params);
  }
}
</script>

<style>

</style>