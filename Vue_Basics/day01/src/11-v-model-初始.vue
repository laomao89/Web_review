<template>
  <div>
    <h1>v-model语法初始</h1>
    <!-- v-bind是单向的 -->
    <!-- <input type="text" :value="msg">     -->
    
    <!-- v-model是双向的 高效 -->
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'我是初始化的数据'
    }
  }
}
</script>

<style>

</style>