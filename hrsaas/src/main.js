import Vue from 'vue'

import 'normalize.css/normalize.css' // 初始化样式
import ElementUI from 'element-ui' // 引入element-ui及样式
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // 引入了全局scss文件

import App from './App'
import store from './store'
import router from './router'

// 直接引入方式 会直接执行js中的代码
import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

// process.env 获取环境变量
// console.log(process.env)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
