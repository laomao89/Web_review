<template>
  <div class="login-page">
    <van-nav-bar title="面经注册" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
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
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit"  color="linear-gradient(to right, #ff6034, #ee0a24)">注册</van-button>
      </div>
    </van-form>

    <router-link class="link" to="/login">有账号，去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // try {
      //   await this.$axios({ method: 'POST', url: '/user/register', data: values })
      //   this.$toast.success('注册成功')
      //   this.$router.push({ path: '/login' }) // 路由切换login
      // } catch (error) {
      //   this.$toast.fail(error.response.data.message)
      // }
      await this.$axios({ method: 'POST', url: '/user/register', data: values })
      // console.log(res)
      this.$toast.success('注册成功') // 弹窗告诉用户注册成功
      this.$router.push({ path: '/login' }) // 路由切换login
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
