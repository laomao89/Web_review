<template>
  <div>
      <h3>SubItem组件</h3>
      <p>已知库存数(同名): {{ count }}</p>
      <p>已知库存数(改名): {{ lm_count }}</p>
      <button @click="sub(5)">(同名)库存-5</button>
      <button @click="lm_sub(1)">(改名)库存-1</button>
  </div>
</template>

<script>
// 1. vuex拿到辅助函数 mapState
import { mapMutations, mapState } from 'vuex'
// const res = mapState(['count'])
// console.log(res);
export default {
  // data(){
  //    return {
  //        count:this.$store.state.count  //这种方式不可以，数据更新后不会跟着变化！
  //    }
  // },

  //过度写法(不会用)
  // computed: {
  //   //简单写法：被算计
  //   count() {
  //       return this.$store.state.count;
  //   }
  // },

  // computed:{
  //   ...res
  // }

  computed:{
    ...mapState(['count']),     //同名写法
    ...mapState({lm_count:'count'})   //改名写法
  },
  methods:{
    ...mapMutations(['sub']),
    ...mapMutations({lm_sub:'sub'})
  },
  
}
</script>