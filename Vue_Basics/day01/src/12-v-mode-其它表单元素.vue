<template>
  <div>
    <h1>v-model其它表单元素</h1>
    <!-- v-bind是单向的 -->
    <!-- <input type="text" :value="msg">     -->
    
    <!-- v-model是双向的 高效 -->
    <input type="text" v-model="msg"><br>

    <input type="checkbox" v-model="key"><br>
    <textarea v-model="msg"></textarea><br>
    <select name="" id="" v-model="num">
      <option value="1">杨幂</option>
      <option value="2">杨紫</option>
      <option value="3">金晨</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'我是初始化的数据',
      key:true,
      num:3
    }
  }
}
</script>

<style>

</style>