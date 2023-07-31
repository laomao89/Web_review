<template>
  <div class="box">
    <h1>组件导入</h1>
    <cpt1></cpt1>
    <cpt1></cpt1>
    <cpt1></cpt1>
    <cpt1></cpt1>
    <cpt1></cpt1>
    <cpt2></cpt2>
  </div>
  
</template>

<script>
import cpt1 from "./components/01-cpt.vue"
export default {
  data(){
    return{}
  },
  components:{cpt1}
}
</script>

<style lang="less">
 
</style>