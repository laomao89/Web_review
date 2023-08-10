<template>
  <div>
    <p>
      这是个标签 <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    </p>
    <ul v-show="key">
      <slot></slot>
    </ul>
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