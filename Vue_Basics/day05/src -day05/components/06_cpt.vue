<template>
  <div>
    <h1>$nextTick语法</h1>
    <p ref="p">数量:{{num}}</p>
    <button @click="fn">+1</button>
    <hr>
    <button v-if="key" @click="fn2">点击</button>
    <input v-else type="text" ref="ipt">
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:12,
      key:true,
    }
  },
  methods:{
    fn(){
      this.num++;
      

  //需求:必须通过获取到dom节点后，再拿到此时上面值!
  // 1、获取dom节点 ref this.$refs.p
  // 2、innerHTML
  // console.log(this.$refs.p.innerHTML); // 数量: 18

  //知识:
  /*
      1、数据 + template结构 渲染为真实dom节点之前，会在内存上产生虚拟dom！
      2、数据发生变化后，数据 + template结构会产生所谓 新旧虚拟dom！
      3、新旧虚拟dom做对比（diff算法规则），把对比后结果打补丁到真实dom节点上

      4、【今天新知识：打补丁到真实dom节点过程是异步的！且微任务！记住！】
      this.$refs.p.innerHTML:直接操作真实dom上内容，此时没有更新完成！
      肯定写异步代码，回调函数内部去获取dom节点更新后内容！
          （回头才调用：只有未来某件事完成了，才去调用！）
          （回调函数：dom节点更新完成后，函数才调用！）
  */
  this.$nextTick(() => {
        // console.log('DOM更新后触发$nextTick函数');
        console.log(this.$refs.p.innerHTML);
      })
    },
    fn2(){
      this.key = false; //按钮隐藏了!输入框就会出现
/*
      获取到输入框dom节点 this.$refs.ipt.focus()
        报错: focus方法前面这一堆东西 this.$refs.ipt 是 undefined!
        为什么? input dom节点是undefined?没有节点!
          1、v-ifv-else:初始化input没有这个标签!
          2、key:false，数据变化，新旧虚拟dom--->对比--->更新异步
*/
      // console.log(this.$refs.ipt);     //更新完成后才能操作(因为是异步的)
      this.$nextTick(() => {
        this.$refs.ipt.focus();
      })
    }
  }
}
</script>

<style>

</style>