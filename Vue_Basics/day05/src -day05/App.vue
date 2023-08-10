<template>
  <div>
    <!-- ********************************************************v-model原理 -->
    <!-- <cpt1></cpt1> -->

    <!-- ********************************************************v-model语法糖 -->
    <!-- <p>父级库存:{{num}}</p> -->
    <!-- <p>父子通信:灵活度非常高</p> -->
    <!-- 昨天:父子通信 要求形参单词必须value,通道名称单词input -->
    <!-- <cpt-2 :value="num" @input="fn"></cpt-2> -->

    <!-- <p>语法糖:遵循v-model认识:数据层--视图层 视图层变为--数据层</p>  -->
    <!-- 今天:为什么要强制性要求用这两个单词?value @input 打中了v-model背后原理! -->
    <!-- 父级这边调用子组件 写法 简单了 -->
    <!-- 数据传入，内部操作后，又把数据变回 -->
    <!-- <cpt-3 v-model="kc"></cpt-3> -->

    <!-- ********************************************************$refs -->
    <!-- ref获取DOM节点 -->
    <!-- <cpt-4></cpt-4> -->

    <!-- ref获取组件:小零件对象  ref="box"相当于id-->
    <!-- <cpt-5 ref="box"></cpt-5>
    <hr>
    <button @click="get">获取组件对象</button> -->

    <!-- $nextTick语法 -->
    <cpt-6></cpt-6>

    <!-- ********************************************************动态组件-->
    <!-- <cpt-7dynamic v-colorful></cpt-7dynamic> -->

    <!-- ********************************************************自定义指令(全局)-->
    <!-- <h1 v-colorful>vue内部标签:测试全局自定义指令v-color</h1> -->
    <!-- ********************************************************自定义指令(局部)-->
    <!-- <cpt-8>vue内部标签:测试局部自定义指令</cpt-8> -->

    <!-- <h1 v-color='pink'>指令:后面可以传入值</h1> -->
    <!-- <h1 v-color="color">指令:后面可以传入值color是个变量，把值传给前面的值</h1> -->

    <!-- <h1 v-dance="time2">测试2:颜色背景疯狂跳舞(1220ms)</h1>
    <button @click="time2=20">快起来</button> 

    <h1 v-dance="time1">测试1：跳起舞来 time1: 300ms</h1> -->
    <!--     3、time1重新赋值，原来自定义指令inserted内部binding获取不到 time1变化后值 -->
    <!-- <button @click="time1=2000">慢下来：time1: 2000ms</button> -->
    
    <!-- ********************************************************插槽-->
    <!-- 组件复用性 -->
    <!-- 1、组件内部：使用slot占个形参的位置 -->
    <!-- 2、调用组件，传入特别的实参（html结构） -->
    <!-- <cpt-9>
      <ul>
        <li>xxxxxxxxx</li>
        <li>xxxxxxxxx</li>
        <li>xxxxxxxxx</li>
        <li>xxxxxxxxx</li>
        <li>xxxxxxxxx</li>
      </ul>
    </cpt-9>
    <cpt-9>
      <div>
        <img src="./assets/logo.png" alt="">
      </div>
    </cpt-9> -->
    
  
  </div>
</template>

<script>
import cpt1 from "./components/01.v-model.vue"
import cpt2 from "./components/02_cpt.vue"   
import cpt3 from "./components/03_cpt.vue"        
import cpt4 from "./components/04_cpt.vue"
import cpt5 from "./components/05_cpt.vue"
import cpt6 from "./components/06_cpt.vue"
import cpt7 from "./components/07_cpt.vue"
import cpt7dynamic from "./components/07_cpt dynamic.vue"
import cpt8 from "./components/08_cpt.vue"
import cpt9 from "./components/09_cpt.vue"
import cpt10 from "./components/10_cpt.vue"
export default {
  data(){
    return{
      num:99,
      kc:250,
      color:'green',
      time1:300,
      time2:1220,
    }
  },
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
    cpt5,
    cpt6,
    cpt7,
    cpt7dynamic,
    cpt8,
    cpt9,
    cpt10,
  },
  methods:{
    fn(a){
      //a:收到的信号
      this.num = this.num + a;
    },
    get(){
      //该组件对象:子组件内部那个this,此时在父级内获取:后期组件库与到时候
      // 思维拓展:子组件内部一切都可以拿到了(数据和方法)

      // console.log(this.$refs.box);
      // console.log(this.$refs.box.info);
      this.$refs.box.fn();
    

    }
  }
}
</script>

<style>

</style>