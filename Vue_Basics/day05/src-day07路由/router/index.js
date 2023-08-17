//注意：
        //当前js文件需要导入vue
        //main.js用router，需要导出
        //组件的路径地址:@
import Vue from 'vue';
//0、下载：npm i vue-router@3.5.3
import VueRouter from 'vue-router'; //1、导入router

Vue.use(VueRouter);     //2、使用router

//3、创建路由对象(核心)
      //@：vue项目特有的！ @：从src文件夹地址开始
import Find from '@/views/Find' //导入 组件App
import My from '@/views/My'
import Part from '@/views/Part'
import page404 from '@/views/404'
const router = new VueRouter({
  //1、配置规则
  //2、展示组件：<router-view></router-view>  在App.vue中
  routes:[
    { //默认：指定来到某个下面已经配置好的路由地址
      path:'/', 
      redirect:'find',  //指定重定向默认地址为'find'组件下
    },
    {
      name:'f',  //表明随便起
      path:'/find', //path:路径去/find  
      component:Find,  //component组件：展示下面组件
    },
    {
      name:'m',
      path:'/my',
      component:My,
    },
    {
      name:'p',
      path:'/part',
      component:Part,
    },

    {//可变路由规则
      name:'kb',
      path:'/part/:name',
      component:Part,
    },
    {
      path:'*',
      component:page404,
    }
  ],

  //模式配置：看产品要求需要后台配置
  // mode:"history",   //history浏览器的历史设置 默认hash


  

});
// 导出
export default router