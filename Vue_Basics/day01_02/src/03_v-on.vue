<template>
  <div id="vue">
    <h1>v-on</h1>
    <p>作用:给某个标签绑定事件</p>
    <hr>
    <p>语法1：v-on:事件名称="后面代码很少，一句话！直接把写函数体内容写出来！"</p>
    <p>商品数量:{{num}}</p>
    <p>直接操作数据<button v-on:click="num--">-1</button></p>
    <p>直接操作数据<button v-on:click="num++">+1</button></p>
    <hr>
    <p>语法2：v-on:事件名称="后面业务很复杂，写个函数名" 下面在methods里面放函数</p>
    <p>简写： @事件名称</p>
    <p>直接操作数据<button @click="num--">-1</button></p>
    <p>直接操作数据<button @click="num++">+1</button></p>
    <hr>
    <p>
      在函数内部通过this操作数据<button v-on:click="del">-2</button>  <button @click="del">-2 简写</button>  
    </p>
    <p>
      在函数内部通过this操作数据<button v-on:click="del">-2</button>  <button @click="del">-2 简写</button>  
    </p>
    

    
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:10
    }
  },
  // 函数  method:方法
  methods:{
    add(){
      // 
      // 函数内部：
      //   this指向：vue项目 .vue文件 组件文件！this：为当前组件！
      //   this上面  有初始化 变量名：值
      this.num +=2; 
    },
    del(){
      this.num -=2;
    }
  }
}
</script>

<style>
#vue{
  font-size: 28px;
}
</style>