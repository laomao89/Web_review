<template>
  <div class="ym-box" style="color: blue;">测试组件:内部自定义name</div>
</template>

<script>
export default {
  name:'cptTmp',
  data(){
    return{
      //变量:局部作用域,不会导致样式污染
    }
  }
}
</script>

<style scoped>
    /* 样式污染第一种解决方案:起个独一无二的类名 */
      /*.ym-box{ */
        /* 会导致样式污染 */
        /* background-color: yellow;    */
        /* } */

    /* 样式污染第二种解决方案:给style加上scoped(属性选择器)*/
    div{
      background-color: purple;
    }
</style>