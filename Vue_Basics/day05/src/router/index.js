//注意：
        // 需要导入vue
        //main.js用router，需要导出
import Vue from 'vue';
//0、下载：npm i vue-router@3.5.3
import VueRouter from 'vue-router'; //1、导入router

Vue.use(VueRouter);     //2、使用router

//3、创建路由对象(核心)
      //@：vue项目特有的！ @：从src文件夹地址开始
import Find from '@/views/Find' //导入 组件App
import My from '@/views/My'
import Part from '@/views/Part'
const router = new VueRouter({
  //1、配置规则
  routes:[
    {
      path:'/find', //path:路径去/find  
      component:Find,  //component组件：展示下面组件
    },
    {
      path:'/my',
      component:My,
    },
    {
      path:'/part',
      component:Part,
    },
  ],
  //2、展示组件：<router-view></router-view>

});
// 导出
export default router