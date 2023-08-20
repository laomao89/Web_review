/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'
// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000 // 超时5000ms
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = localStorage.getItem('h5-token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error) // 基本上用不到(不能删)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // token过期，身份证有效期没有了！
  //        1、跳转登录路由
  //        2、过期token需要清除！

  // 防止后台还有其他情况401状态
  if (error.response.data.code === 401 && error.response.data.message === 'token错误，请联系管理员') { // token有问题
    localStorage.removeItem('h5-token') // 过期token需要清除！
    // 跳转登录路由
    //    location.href = '#/login'  无形中换了路由  不推荐！代码维护不方便！
    //    路由：
    router.push({ path: '/login' })
  } else { // 常规请求有错误，账号密码错误！
    Toast.fail(error.response.data.message)
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
