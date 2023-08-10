<template>
  <div>
    <!-- 需求1：tab栏的样式切换，弄个变量！多个条件最后只有一个成立！ -->
    <span :class="{active:con=='gn1'}" @click="fn('gn1')">功能1</span>
    <span :class="{active:con=='gn2'}" @click="fn('gn2')">功能2</span>
    <span :class="{active:con=='gn3'}" @click="fn('gn3')">功能3</span>

    <!-- 需求2：准备3个子组件，也是最终只能留下一个 -->
    <son-1 v-if="con=='gn1'"></son-1>
    <son-2 v-else-if="con=='gn2'"></son-2>
    <son-3 v-else-if="con=='gn3'"></son-3>

</div>
</template>

<script>
import son1 from './07_son1.vue'
import son2 from './07_son2.vue'
import son3 from './07_son3.vue'
export default {
  components:{
    son1,son2,son3
  },
  data(){
    return{
      con:'gn1'
    }
  },
  methods:{
    fn(i){
      this.con = i;
    }
  }
}
</script>

<style lang="less" scoped>
  span{
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    border: 1px solid black;
    margin: 5px;
  }
  .active{
      background-color: #ccc;
    }
</style>