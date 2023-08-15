<template>
  <div>
    <h1 v-color="al" v-ztcolor="z">全局与局部</h1>
    <h1 v-color="bl">全局与局部</h1>
    <button @click="al=bl='rgba(123,155,34,0.2)'">变pink</button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      al:"linear-gradient(red, yellow,green)",
      bl:'linear-gradient(blue,red,green)',
      z:'white',
    }
  },
  directives:{
    ztcolor(el,binding){
      el.style.color = binding.value;
    }
  }
}
</script>

<style>

</style>