<template>
  <div id="app">
    <h1>最根组件</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{info}}</p>
    <p>{{rmArr[2]}}</p>
    <p>是否成年:{{obj.age>=18?'成年':"未成年" }}</p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
export default {
    // data固定：内部return
    data(){
    return {  
      // vue语法插值表达式 {{}}    直接把数据渲染到页面内！
      //   1、初始化数据，写在return{内部}
      //   2、放入到展示某个标签内：思想不再操作dom，
      //    注意：模板字符串语法非常像 ES6 `${变量}   ${变量}`
      //         内部可以写简单表达式（三元），不能写语句 if for
      //         {{}} 不能写在标签行内！
      info:"我是字符串，展示数据！",
      rmArr:["张三","李四","王五"],
      obj:{
        name:"炸花生",
        age:19
      }
    }
  }
}
</script>

<style lang="less">
#app {
  background-color: pink;
  h1{color: yellowgreen;}
}
</style>
