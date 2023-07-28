<template>
  <div>
    <h1>v-bind</h1>
    <p>作用:插值表达式用于行外数据绑定！v-bind用于行内</p>
    <p>语法:v-bind:标签内属性名="变量名"</p>
    <p>简写::标签内属性名="变量名”</p>

    <a v-bind:href="msg">接口文档</a>
    <a :href="msg">简写v-bind_接口文档</a>
  </div>
</template>

<script>
export default {
data(){
  return{
    msg:'https://apifox.com/'
  }
}
}
</script>

<style>

</style>