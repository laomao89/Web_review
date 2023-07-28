<template>
  <div>
    <p>
      vue：高效（M数据层   V视图层   VM视图模型、组件化：大白话零件化）
    </p>
    <p>
      @vue/cli : 全局命令行工具，帮助我们初始化vue脚手架项目
    </p>
    <p>
      插值表达式：标签行外数据绑定  {{info}}  <br>
         
      v-bind: 标签行内属性绑定: <a v-bind:href="href">黑马</a> <a :href="href">黑马</a>  <br>

      v-on: 事件绑定！ <button v-on:click="fn">btn</button> <button @click="fn">btn</button> <br>
    </p>

    <h3>vue思想转变：没有dom获取，直接找标签往上怼！</h3>
  </div>
</template>

<script>
export default {
  data(){  // 语法必须完整！
    return {
      info:"我是展示的数据",
      href:"http://www.itcast.cn"
    }
  },
  methods:{
    fn(){
      console.log("页面逻辑");
      // 需要用到初始化数据  this：当前组件对象，可以直接操作data内键值对
      this.info = "点击后就变了！"
    }
  }
}
</script>

<style>

</style>