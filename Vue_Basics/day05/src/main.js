import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局自定义指令：directive指令
//vue.directive('自定义指令名称',{配置})
//该指令可以在任何组件中使用
Vue.directive('colorful',{
  inserted(el,binding){
    //inserted插入，某些标签会用到指令！虚拟dom 第一次渲染为真实dom节点时候，初始化的时候
    //el：element元素 节点 第一次渲染为真实dom节点
    el.style.background = 'linear-gradient(red, yellow,green)';
    el.style.cursor = 'pointer'
  }
}); 
Vue.directive('color',{
  inserted(el,binding){
    // console.log(binding);
    el.style.backgroundColor = binding.value;
    el.style.cursor = 'pointer'
  }
}); 
//需求：设置东西，只要拥有这个东西可以随机开始变背景色，颜色跳舞
let timer = null;
// Vue.directive('dance',{

//   inserted(el,binding){
//     //el:那个真实dom
//     //binding.value:传入的指令后面值
//     el.style.color='white';
//     timer = setInterval(() => {
//       let a = Math.floor(Math.random() * 256);
//       let b = Math.floor(Math.random() * 256);
//       let c = Math.floor(Math.random() * 256);
//       el.style.backgroundColor = `rgba(${a},${b},${c})`;
//     },binding.value);
//   },
//   //time1变了:数据变量，新旧虚拟dom，对比打补丁更新
//   //当指令后面数据变化的时候才执行函数
//   //形参意义和上面inserted内部一样
//   update(el,binding){
//     clearInterval(timer);
//     // console.log(binding.value);
//     setInterval(() => {
//       let a = Math.floor(Math.random() * 256);
//       let b = Math.floor(Math.random() * 256);
//       let c = Math.floor(Math.random() * 256);
//       el.style.backgroundColor = `rgba(${a},${b},${c})`;
//     },binding.value);
//   }
// });

//最后:如果inserted内部和update内部代码一样！写成一个函数!
Vue.directive('dance',(el,binding)=>{
  console.log(binding.value);
  clearInterval(timer);
  timer = setInterval(() => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    el.style.backgroundColor = `rgba(${a},${b},${c})`;
  },binding.value);
})



new Vue({
  render: h => h(App),
}).$mount('#app')
