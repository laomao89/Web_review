<template>
  <div>
    <h1>v-model修饰符</h1>
    <!-- .number   转数字类型
    .trim     去除首尾空白字符
    .lazy     在change时触发而非input时 -->
    <input type="text" placeholder="输入数字" v-model.number="number">
    <input type="text" placeholder="输入姓名" v-model.trim="name">
    <input type="text" placeholder="输入年薪" v-model.lazy="price">
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:12,
      name:'杨幂',
      price:'12万'
    }
  }
}
</script>

<style>

</style>