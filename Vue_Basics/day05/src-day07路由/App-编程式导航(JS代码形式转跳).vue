<template>
  <div>
    <div class="footer_wrap"> 
      
      <!-- <span @click="dmc('/find')">发现音乐</span>
      <span @click="dmc('/my')">我的音乐</span>
      <span @click="dmc('/part')">朋友</span> -->

      <span @click="dmc_bm('f')">发现音乐</span>
      <span @click="dmc_bm('m')">我的音乐</span>
      <!-- <span @click="dmc_bm('p')">朋友</span> -->
      
      <span @click="fn1">朋友-杨幂</span>
      <span @click="fn2">朋友-杨紫</span>
    </div>

    
    <div class="top">
      <!-- 组件：专门展示对应组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dmc(path){
      //JS代码
      this.$router.push({
        path:path,  //路由规则定义好的路由地址
      })
    },
    dmc_bm(bm){
      this.$router.push({
        name:bm,
      })
    },
    fn1(){
      this.$router.push({
        //去哪?
        name:'p',      //part路由地址
        //参数：
        query:{
          ym:'杨幂幂'
        }
      })
    },
    fn2(){
      //形式 ：/part/可变字
      this.$router.push({
        name:'kb',  // 去/part/可变字
        params:{
          yz:'杨紫紫'   //那么属性名不能随意写  按照可变路由里面变量名
        }

      })
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: red!important;
}


.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a,.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover,.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>