<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />

    <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="请输入用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button square block type="info" native-type="submit" color="linear-gradient(to right, #ff6034, #ee0a24)">登录</van-button>
    </div>
    </van-form>
    <router-link to="/register" class="link">账号注册</router-link>
  </div>
</template>

<script>

export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const { data } = await this.$axios({ method: 'POST', url: '/user/login', data: values })
      this.$toast.success('登录成功')
      localStorage.setItem('h5-token', 'Bearer ' + data.token) // 存token后续所有接口都要用
      this.$router.push({ path: '/article' }) // 路由切换到主页layout
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
