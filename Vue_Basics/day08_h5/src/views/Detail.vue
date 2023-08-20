<template>
  <div class="detail-page">
    <!-- @click-left="xxx" -->
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>{{  datails.stem }}</h1>
      <p>
        {{ datails.createdAt }} | {{ datails.views }} 浏览量 |
        {{ datails.likeCount }} 点赞数
      </p>
      <p>
        <img :src="datails.avatar" alt="" />
        <span>{{ datails.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="datails.content"></main>
    <div class="opt">
      <!-- 点击
          1、点击后，该文章真的就被点赞!后台数据肯定变了
          2、ajax的请求!第一次:点赞!第二次:取消点赞!人家设计接口考虑这些问题
          APT: interview/opt GET请求方式 id, optType:1点赞    2收藏 -->
      <van-icon :class="{active:datails.likeFlag}" name="like-o" @click="like"/>
      <van-icon :class="{active:datails.collectFlag}" name="star-o" @click="collect"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datails: {}
    }
  },
  name: 'detail-page',
  async created () {
    // 3.组件展示出来后：获取id
    const id = this.$route.params.id
    // 4.对应api接口，获取文章详情！把数据渲染到页面！
    const { data } = await this.$axios({
      url: 'interview/show',
      params: {
        id
      }
    })
    // console.log(data)
    this.datails = data
  },
  methods: {
    // 点赞
    like () {
      // 样式：理科Flag取对立面,这是组件不是页面，不会让页面再次刷新
      this.datails.likeFlag = !this.datails.likeFlag
      // 通知后台: 请求发送过去后，通知后台！毕竟后台数据也要同步
      this.$axios({
        url: 'interview/opt',
        method: 'POST',
        data: {
          id: this.datails.id,
          optType: 1
        }
      })

      // 对自己操作的组件内：点赞数量变化
      if (this.datails.likeFlag) {
        this.datails.likeCount++
      } else {
        this.datails.likeCount--
      }
    },
    // 收藏
    collect () {
      // 样式：理科Flag取对立面,这是组件不是页面，不会让页面再次刷新
      this.datails.collectFlag = !this.datails.collectFlag
      // 通知后台: 请求发送过去后，通知后台！毕竟后台数据也要同步
      this.$axios({
        url: 'interview/opt',
        method: 'POST',
        data: {
          id: this.datails.id,
          optType: 2 // 改变就是收藏
        }
      })
    }
  }
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
