<template>
  <div>
    <h1>v-text\v-html</h1>
    <p v-text="msg"></p>
    <p v-html="msg"></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'<div class="a">这是个盒子</div>'
    }
  }
}
</script>

<style>
.a{
  width: 200px;
  height: 200px;
  background-color:yellowgreen;
  text-align: center;
  font-size: 30px;
}
</style>