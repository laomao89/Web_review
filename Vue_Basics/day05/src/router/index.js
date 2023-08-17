import Vue from 'vue'
import VueRouter from 'vue-router'

//使用Router
Vue.use(VueRouter);

import Layout from '@/views/Layout' //一级路由组件
import Article from '@/views/Layout(二级路由组件)/Article'  //二级路由组件
import Collect from '@/views/Layout(二级路由组件)/Collect'
import Like from '@/views/Layout(二级路由组件)/Like'
import User from '@/views/Layout(二级路由组件)/User'
import ArticleDetail from '@/views/ArticleDetail'

const router = new VueRouter({
  routes:[
    //直接配置路由规则
    { //一级路由规则
      path:'/',
      component:Layout,
      children:[  //二级路由规则
        {
          path:'/article',component:Article
        },
        {
          path:'/collect',component:Collect
        },
        {
          path:'/like',component:Like
        },
        {
          path:'/user',component:User
        }      
      ],

    },
    //文章详情
    {
      name:'detail',
      path:'/detail/:id',
      component:ArticleDetail,
    }
  ]
});

export default router;