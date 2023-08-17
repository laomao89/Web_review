<template>
  <div class="layout-page">
    <router-view/>

    <van-tabbar route active-color="red" inactive-color="blue">
      <van-tabbar-item to="/article" icon="video-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
