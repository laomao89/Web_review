<template>
  <div>
    <!-- <h1>封装特别函数</h1> -->
    <div class="box">
      <h3>标题<button @click="key=!key">{{key?'折叠':'展开'}}</button></h3>
      <ul v-show="key">
        <li v-if="key">xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxx</li>
      </ul>
      <cpt2></cpt2>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      key:true
    }
  }
}
</script>

<style lang="less">
.box{
  text-align: center;
  border: 3px solid black;
  li{
    list-style:none;
  }
    
  
 }
</style>