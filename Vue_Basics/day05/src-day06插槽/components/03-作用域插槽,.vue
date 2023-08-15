<template>
  <div>
    <h1>这是个图片</h1>
    <!-- 作用域插槽位置 -->
    <slot :img="imgsrc">
      {{src}}
    </slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgsrc:'http://imgsrc.baidu.com/forum/w%3D223/sign=a4d1e45bfe03918fd7d13ac8623c264b/6aae44086e061d95cd8d848372f40ad160d9caf6.jpg',

    }
  }
}
</script>

<style>

</style>