import Vue from 'vue'
import App from './App.vue'

 import cpt2 from "./components/02-cpt"  //全局导入
// console.log(cpt2);
Vue.component("cpt2",cpt2);

import cpt3 from "./components/03-cpt"
Vue.component(cpt3.name,cpt3)            //名字内部自定义好

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
