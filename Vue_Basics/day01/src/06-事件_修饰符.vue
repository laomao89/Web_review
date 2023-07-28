<template>
  <div>
<h1>事件修饰符</h1>
<a :href=href @click.prevent="fn">杨幂贴吧</a>
<div class="box" @click="fn1">
  <div class="min" @click.stop="fn2"></div>
</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      href:'https://c.tieba.baidu.com/f?ie=utf-8&kw=%E6%9D%A8%E5%B9%82&fr=search'
    }
  },
  methods:{
    fn(){
      console.log('已阻止此请求');
    },
    fm1(){
      console.log('我是你劳资');
    },
    fn2(){
      console.log('我是你儿子');
    }
}
}
</script>

<style lang="less">
.box{
  height: 250px;
  width: 250px;
  border: 2px solid yellow;
  background-color: green;
  .min{
    height: 150px;
    width: 150px;
    background-color: red;
    margin: 50px auto;
  }
}
</style>