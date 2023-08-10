<template>
  <div>
    <h1>v-model原理</h1>

    <h3>直接用:</h3>
    <input type="text" v-model="msg"><br>

    <h3>原理:两个方向,自己设置一遍!</h3>
    <input type="text" :value="info" @input="fn">
  </div>
</template>

<script>
 
export default {
  data(){
    return{
      msg:'初始化数据',
      info:'初始化数据'
    }
  },
  methods:{
    fn(i){
      //1、拿到用户此时对该标签输入的那个值,2、把该值给info
      // console.log(i.target.value);
      this.info = i.target.value;
    }
  }
}
</script>

<style>

</style>