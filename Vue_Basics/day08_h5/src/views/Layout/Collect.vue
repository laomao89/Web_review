<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
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
  name: 'collect-page', // 复制：eslint得有name!
  data () {
    return {
      list: [],
      page: 1,
      loading: false, // 某次数据是否正在加载！
      finished: false // 全部数据是否加载完成
    }
  },
  methods: {
    // 触底加载
    async onLoad () {
      // 1、不能让onLoad初始化的时候执行！组件加:immediate-check="false"
      // 2、滑到底部？请求下一页
      this.page++

      // 数据防抖:不需要组件已经帮我们实现了，加载过程中不触发load事件
      const { data } = await this.$axios({
        url: '/interview/opt/list',
        params: {
          page: this.page,
          optType: 2 // 收藏:可以写死
        }
      })
      // console.log(data)
      // push:要用展开语法
      this.list.push(...data.rows)

      // 需要配置loading：加载中，请求新的数据后，加载完毕
      this.loading = false

      // 判断：到啥时候不能下滑？
      if (this.page >= data.pageTotal) {
        this.finished = true // 全部加载完成
      }
    },
    // 初始化init 单独封装一个函数
    async init () {
      const { data } = await this.$axios({
        url: '/interview/opt/list',
        params: {
          page: this.page,
          optType: 2
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
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
