<template>
  <div>
    <!-- 双标签、单标签 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$axios)
  }
}
</script>
<style lang="less">
 .box{
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
 }
</style>
