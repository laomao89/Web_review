<template>
  <div>
    <h1>库存:</h1>
    <p>{{value}}</p>
    <button @click="sale">卖5件</button>
  </div>
</template>

<script>
export default {
  props:["value"],
  methods:{
    sale(){
      this.$emit("input",-5);
    }
  }
}
</script>

<style>

</style>