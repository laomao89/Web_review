<template>
  <div>
    <!-- 作用域插槽 -->
    <slot :row="obj">
      {{obj.name}}--{{obj.age}}--{{obj.sex}}
    </slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      obj:{
        name:"杨幂",
        age:32,
        sex:'女'
      },
    }
  }
}
</script>

<style>

</style>