<template>
  <div>
    <h1>v-if</h1>
    <h1>湖南理工2023录取分数</h1>
    <p v-if="num>=550">一本</p>
    <p v-else-if="num>=500">二本</p>
    <p v-else-if="num>=475">大专</p>
    <p v-else>复读去吧</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:510
    }
  }
}
</script>

<style>

</style>