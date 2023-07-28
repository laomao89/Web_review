<template>
  <div>
    <h1>v-show v-if</h1>
    <p>v-show="变量" 变量:true 展示   控制盒子显示隐藏</p>
    <p>v-if="变量" 变量:true 展示 控制盒子创建删除</p>

    <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    <div class="box" v-show=key></div>
    <div class="min" v-if=key ></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      key:true
    }
  }
}
</script>

<style>
.box{
  width: 200px;
  height: 150px;
  background-color: red;
}
.min{
  border-top: 20px solid #fff;
  width: 200px;
  height: 150px;
  background-color: blue;
}
</style>