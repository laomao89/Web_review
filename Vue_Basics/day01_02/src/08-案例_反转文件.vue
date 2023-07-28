<template>
  <div>
    <h1>反转世界</h1>
    <h2>{{msg}}</h2>
    <button @click="fn">反转</button>
  </div>
</template>

<script>
export default {
//思路
    // 1.点击:肯定注册点击事件
    // 2.字反了？点击后控制字 字符串
    // 3.字符串一定是个初始化数据变量,控制这个变量用相应的方法
    // 4.方法是?
        // 学?     数组才有反转!
        // 现在?   msg是数组?  NO
        // 学?     字符串变数组 split("分隔符”) split("")每个字分开为一个数组
  data(){
    return{
      msg:'我爱杨幂'
    }  
  },
  methods:{
    fn(){
      let arr = this.msg.split("");
      let res = arr.reverse();
      let str = res.join("");
      this.msg = str
      console.log(str);
    }
  }
}
</script>

<style>

</style>