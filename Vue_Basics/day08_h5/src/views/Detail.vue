<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="xxx"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>xxx</h1>
      <p>
        xxx | xxx 浏览量 |
        xxx 点赞数
      </p>
      <p>
        <img src="xxx" alt="" />
        <span>xxx</span>
      </p>
    </header>
    <main class="body"></main>
    <div class="opt">
      <van-icon class="active" name="like-o"/>
      <van-icon class="active" name="star-o"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-page'
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
