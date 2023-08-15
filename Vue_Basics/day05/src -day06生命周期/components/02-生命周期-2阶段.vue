<template>
  <div>
    <p id="box">我是测试标签</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'我是杨幂'
    }
  },
  beforeMount(){
    console.log(document.querySelector('#box'),"beforeMount");
    console.log(this.msg);
  },
  mounted(){
    console.log(document.querySelector('#box'),"mounted");
    console.log(this.msg);
  }
}
</script>

<style>

</style> 