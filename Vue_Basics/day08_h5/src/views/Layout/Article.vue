<template>
  <div class="article-page">
    <!-- tab栏 -->
    <!-- <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" :class="{active:sorter==='weight_desc'}" @click="change('weight_desc')">推荐</a>
      <a href="javascript:;" :class="{active:sorter===null}" @click="change(null)">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav> -->
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" :class="{active:sorter ==='weight_desc'}" @click="change('weight_desc')">推荐</a>
      <a href="javascript:;" :class="{active:sorter === null}" @click="change(null)">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>

    <!-- 为什么分页加载： -->
    <!--     1、数据展示方式：数据库381条数据，全部展示给用户！体验不好，请求慢！ -->
    <!--     2、分页  1页10条   2页10条  用户一页一页去看！ -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="数据已加载完"
      @load="onLoad"
      :immediate-check="false"
    >
    <!-- 分页加载 -->
      <hm-item v-for="item in list" :key="item.id" :item="item"></hm-item>
    </van-list>
  </div>
</template>

<script>
import HmItem from '@/components/item.vue'
export default {
  name: 'article-page', // 复制：eslint得有name!
  data () {
    return {
      list: [],
      current: 1,
      sorter: 'weight_desc',
      loading: false, // 某次数据是否正在加载！
      finished: false // 全部数据是否加载完成
    }
  },
  methods: {
    async onLoad () {
      // 1、不能让onLoad初始化的时候执行！组件加:immediate-check="false"
      // 2、滑到底部？请求下一页
      this.current++

      // 数据防抖:不需要组件已经帮我们实现了，加载过程中不触发load事件
      const { data } = await this.$axios({
        url: '/interview/query',
        params: {
          current: this.current,
          sorter: this.sorter
        }
      })
      // console.log(data)
      // push:要用展开语法
      this.list.push(...data.rows)

      // 需要配置loading：加载中，请求新的数据后，加载完毕
      this.loading = false

      // 判断：到啥时候不能下滑？
      if (this.current === data.pageTotal) {
        this.finished = true // 全部加载完成
      }
    },
    // 切换
    change (key) {
      // 把标识换了：样式切换、数据切换
      this.sorter = key
      // 数据
      this.list = [] // 数据清空
      this.current = 1 // 重新开始
      this.finished = false // 是否全部完成，没有全部完成

      // 手动让数据再次请求下:
      // this.created()     //生命周期函数不需要手动调用！自动调用
      //  单独封装一下，先完善created内部调用
      this.init()
    },
    // 初始化init 单独封装一个函数
    async init () {
      // 参数说明:
      // 1、current：看第几页的数据  381条、每页10条  39页!
      // 2. sorter:  去决定显示 推荐？最新的数据?
      // 参数位置：为什么放在初始化里面？而不是直接放在请求数据参数里面？
      //        后面会有业务，滑到底加载下一页数据，1------>可变
      //        推荐？最新？用户点击进行切换：“weight_desc ”字符串也得变
      //        放在初始化数据里面：变量
      const { data } = await this.$axios({
        url: '/interview/query',
        params: {
          current: this.current,
          sorter: this.sorter
        }
      })
      // console.log(data)
      this.list = data.rows
    }
  },
  // 数据初始化
  created () {
    this.init()
  },
  components: {
    HmItem
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
