<template>
  <div>
      <h3>AddItem组件</h3>
      <p>已知库存数: {{ $store.state.count }}</p>
      <button @click="addfn(3)">库存+3</button>
  </div>
</template>

<script>
export default {
  //用法1
  methods:{
    addfn(val){
      //操作vuex内部数据：按照语法调用方法
      //  参数：要调用的方法名，要传入值给value
      this.$store.commit('add',val)
    }
  }
}
</script>