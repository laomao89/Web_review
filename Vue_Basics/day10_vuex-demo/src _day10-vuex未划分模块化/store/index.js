//配置vuex：文件夹名字不能vuex
// 0 安装：npm i vuex@3.6.2

//1、引入vuex
import Vue from "vue";
import Vuex from 'vuex';

//2、注册
Vue.use(Vuex)

//3、实例化store对象
const store = new Vuex.Store({
  //**************************************************************state相当于组件 data 数据初始化
  state:{   //作用：初始化vuex数据
    //变量名：初始值
    count:77,
    price:67.8
  },

  //**************************************************************mutations：操作数据的一些方法！（同步：直接操作数据)
  mutations:{  //vuex数据管理中心：操作数据 |管理数据 
    //作用：负责操作数据的一些方法
    //方法名自定义，在组件内部使用
    add(state,value){
      //state：初始化state数据
      //value：增加几个？由外面组件去决定操作数据
      state.count += value
    },
    sub(state,value){
      state.count -= value
    },
    //重置
    reset(state,value){
      state.count = value
    }
  },

  //**************************************************************actions：异步获取数据
  actions:{
    //获取服务器上的数据
    //      1、store 数据存储中心
    //      2、获取到数据后，需要数据中心调用mutations里面方法才能重新设置count  
    //自定义方法名
    getServer(state,value){
        //store  代表vuex数据存储中心！！！
        //value：在这没用！数据来自于后台服务器

        //模拟服务器获取异步代码
        setTimeout(() => {
          //获取后台数据，重新设置给count store 相当于 this.$store.commit()
          store.commit('reset',99999)
        },1000)
    }
  },

  //**************************************************************getters:计算数据
  //总价：数量 * 单价 * 折扣 （组件内计算属性的简单写法）只能被计算
  getters:{
    //all:计算属性的名字，自定义
    all(state){     //state:初始化数据
      return state.count * state.price * 0.75
    }
  }

})
//4、导出store对象
export default store