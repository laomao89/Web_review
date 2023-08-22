<template>
  <div id="app">
    <h1>根组件</h1>
    <span>库存总数:</span>
    <input type="text" v-model.number="count">
    <button @click="get">(用法1)获取服务器上的数据</button>
    <button @click="getServer">(用法2同名)获取服务器上的数据</button>
    <button @click="lm_getServer">(用法2改名)获取服务器上的数据</button>
    <div style="border:1px solid black; width: 300px;">
      <AddItem></AddItem>
    </div>
    <hr>
    <div style="border:1px solid black; width: 300px;">
      <SubItem></SubItem>
    </div>
    <h3>总价：{{ $store.getters.all }}(用法1直接用)</h3>
    <h3>总价：{{ my_all }}(用法1自定义名字)</h3>
    <hr>
    <h3>总价：{{ all }}(用法2同名)</h3>
    <h3>总价：{{ lm_all }}(用法2改名)</h3>
  </div>
  
</template>

<script>
import AddItem from '@/components/AddItem'
import SubItem from '@/components/SubItem'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    AddItem,
    SubItem
  },
  computed:{
    // <input type="text" v-model="count">
    //1、 ...mapState(['count'])    //count计算  简单写法！被算计
    //2、页面中v-model 要求count是数据双向绑定的，要求count能被算计，也能算别人！要求计算完整写法

    //没有办法：只能手动写计算属性的完整写法
    count:{
      get(){
        return this.$store.state.count;
      },
      set(val){
        this.$store.commit("reset",val)
      }
    },
    //记忆：页面中某个数据，来自于vuex！在v-model双向绑定 ，一定是写计算属性的完整写法

    my_all(){
      return this.$store.getters.all;
    },
    ...mapGetters(['all']),
    ...mapGetters({lm_all:'all'})
  },
  methods:{
    //用法1自己起名字、自己写函数
    get(){
      this.$store.dispatch('getServer')
    },

    //用法2：
    ...mapActions(['getServer']),
    ...mapActions({lm_getServer:'getServer'}),

  }
}
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border:1px solid #ccc;
  padding:4px;
}
</style>