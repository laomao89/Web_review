<template>
  <div>
    <p>
      这是个图片标签 <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    </p>
    <div v-show="key">
      <img src="../assets/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      key:true,
    }
  }
}
</script>

<style>

</style>