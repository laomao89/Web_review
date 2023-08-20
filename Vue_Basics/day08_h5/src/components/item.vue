<template>
  <!-- <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        >推荐</a
      >
      <a
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav> -->

    <van-cell class="article-item" @click="go">
      <template #title>
        <div class="head">
          <img :src="item.avatar" alt="" />
          <div class="con">
            <p class="title van-ellipsis">{{ item.stem }}</p>
            <p class="other">{{ item.creator }} | {{item.createdAt}}</p>
          </div>
        </div>
      </template>
      <template #label>
        <div class="body van-multi-ellipsis--l2" v-html="item.content"></div>
        <div class="foot">{{ item.likeCount }} | {{ item.views }}</div>
      </template>
    </van-cell>
  <!-- </div> -->
</template>

<script>
export default {
  // 组件封装注册：自己就把这个名字就写好！eslint规范名字！
  name: 'HmItem',
  props: ['item'],
  methods: {
    go () {
      // 需求：点击后去详情路由
      //    1、路由转跳 路由规则里面去起个名字
      //    2、带上每个数据id
      this.$router.push({
        name: 'detail', // 不是路径
        params: {
          id: this.item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
