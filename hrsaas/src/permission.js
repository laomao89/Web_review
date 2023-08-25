// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// // 页面滚动条
// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// // 白名单
// const whiteList = ['/login'] // no redirect whitelist

// // 全局前置守卫 每当路由跳转一次都会指向这个路由钩子
// router.beforeEach(async(to, from, next) => {
//   // 开启加载  头部的滚动条
//   NProgress.start()

//   // 设置页签内容
//   document.title = getPageTitle(to.meta.title)

//   // 获取token  用来判断用户是否登录
//   const hasToken = getToken()

//   if (hasToken) {
//     // 登录后的逻辑
//     if (to.path === '/login') {
//       // 如果登录后还要去登录页直接跳转其它指定页面
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       const hasGetUserInfo = store.getters.name
//       if (hasGetUserInfo) {
//         // 如果有用户新湖正常跳转
//         next()
//       } else {
//         try {
//           // 如果没有用户信息，去获取下用户信息
//           await store.dispatch('user/getInfo')
//           next()
//         } catch (error) {
//           // 如果获取不到用户信息，跳转登录页面重新进行登录操作
//           await store.dispatch('user/resetToken')
//           Message.error(error || 'Has Error')
//           next(`/login?redirect=${to.path}`)
//           // 让滚动条到头
//           NProgress.done()
//         }
//       }
//     }
//   } else { // 未登录
//     if (whiteList.indexOf(to.path) !== -1) {
//       // 未登录访问的是白名单里的数据正常跳转
//       next()
//     } else {
//       // 如果未登录还想要看其它页面自动跳转到登录页
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
