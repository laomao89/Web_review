<template>
  <div>
    <div class="footer_wrap"> 
      <!-- 路由：切换样式 a标签和以前去做tab样式切换一样 -->
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->

      <!-- router提供： -->
              <!-- 1、to后面不需要些#
              2、router-link被渲染为a标签
              3、自带类名 -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <!-- <router-link to="/part">朋友</router-link> -->
                
      <!-- 需求：路由去某个组件内，给组件传入值 -->
                <!-- 方法1： -->
                  <!-- 传入某个数据\路径?name='杨幂' -->
                  <!-- 组件内部应该获取传入数据!#route.query 拿到  {name:'杨幂'} -->
      <router-link to="/part?ym='杨幂&age=32'">朋友-杨幂</router-link>
     
                <!-- 方法2： -->
                  <!-- 传入某个数据/路径/杨紫   新的路由地址 -->
                  <!-- 绝对不是吧所有可变地址全部配置 路由规则：可变路径 /路径/:name -->
                        <!-- name变量名随便起,name可以获取到/路径/可变  可变这个部分 -->
                  <!-- 组件内部要拿这个可变数据 $route.params -->
      <router-link to="/part/杨紫">朋友-杨紫</router-link>

      
    </div>

    
    <div class="top">
      <!-- 组件：专门展示对应组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

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