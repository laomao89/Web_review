import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router' //默认去文件夹下index.js



Vue.config.productionTip = false

Vue.directive('color',(el,binding) => {
  el.style.background = binding.value;
});



new Vue({
  router, //4、关联到现有vue实例里
  render: h => h(App),
}).$mount('#app') //mount镶嵌到 #app(public/index.html div#app)
