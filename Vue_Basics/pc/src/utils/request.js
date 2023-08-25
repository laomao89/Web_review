import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://interview-api-t.itheima.net/'
axios.defaults.timeout = 5000

// 拦截器：请求响应 公共设置 插件：Axios Snippets
axios.interceptors.request.use(config => {
  config.headers.Authorization = store.state.user.token
  return config
}, error => {
// Do something with request error
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.data.code === 401 && error.response.data.message === 'token错误，请联系管理员') {
    // 删除vuex内token
    store.commit('user/del')

    // 路由转跳
    router.push('/login')
  } else { // 除了401以外的报错都提醒
    Message({
      showClose: true,
      message: error.response.data.message,
      type: 'error'
    })
  }
  // Do something with response error
  return Promise.reject(error)
})

export default axios
