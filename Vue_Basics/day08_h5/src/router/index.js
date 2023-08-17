import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import Layout from '@/views/Layout'

import Like from '@/views/Layout/Like'
import Article from '@/views/Layout/Article'
import Collect from '@/views/Layout/Collect'
import User from '@/views/Layout/User'
Vue.use(VueRouter)
const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/article/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', redirect: '/article' },
      { path: '/article', component: Article },
      { path: '/like', component: Like },
      { path: '/collect', component: Collect },
      { path: '/user', component: User }
    ]
  }

]

const router = new VueRouter({
  routes
})

const whiteList = ['/login', '/register'] // 白名单列表，记录无需权限访问的所有页面
// 路由守卫：从哪来到哪去信息
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('h5-token')

  // 如果有token直接放行
  if (token) {
    next()
  } else { // 没有登录
    // 没有token的用户看看你去哪
    // (1) 访问的是无需授权的页面（白名单），也是放行
    //     就是判断，访问的地址，是否在白名单数组中存在 includes
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // (2)否则拦截到登录
      next('/login')
    }
  }
})

export default router
