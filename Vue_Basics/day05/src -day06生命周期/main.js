import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('color',(el,binding) => {
  el.style.background = binding.value;
});



new Vue({
  render: h => h(App),
}).$mount('#app')
