<template>
  <div>
    <p>
      <slot name="title"></slot>
      <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    </p>
    <div v-show='key'>
      <slot name="content">默认值</slot>
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