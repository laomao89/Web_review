<template>
  <div>
    <h1>库存:</h1>
    <p>{{value}}</p>
    <button @click="end">清空</button>
  </div>
</template>

<script>
export default {
  props:["value"],
  methods:{
    end(){
      this.$emit("input",0);
    }
  }
}
</script>

<style>

</style>