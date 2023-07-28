<template>
  <div class="app">
    <h1>按键修饰符</h1>
    <input type="text" @keydown.enter="fn" @keydown.esc="fn2">
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      console.log('您已按下回车确定');
    },
    fn2(){
      console.log('您已按下esc退出');
    }
  }
}
</script>

<style>

</style>