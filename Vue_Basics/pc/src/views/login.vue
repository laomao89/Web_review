<template>
  <div class="login-page">
    <el-card>
      <template #header>老毛面经运营后台</template>
      <el-form autocomplete="off" :model="form" :rules="rules" ref="box">

        <el-form-item label="用户名" prop="username">
          <el-input placeholder="输入用户名" v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="输入用户密码" v-model="form.password"></el-input>
        </el-form-item>

        <el-form class="tc">
          <el-button type="primary" @click="submit">登 录</el-button>
          <el-button @click="reset">重 置</el-button>
        </el-form>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: ['blur', 'change'] }
        ],
        // 密码
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }, // 必填
          // 5-11位 \w字母数字下划线    发现文档上下没有查询内容！分散在文章某个a标签！
          { pattern: /^\w{5,11}$/, message: '长度在5到11个 字母数字下划线', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 思路1：把form表单里面属性置空！把每个属性都得写一下！
      // this.form.username = "";

      // 思路2：文档有方法去置空！
      this.$refs.box.resetFields()
    },
    submit () {
      this.$refs.box.validate(async (valid) => {
        if (valid) {
          // axios 数据提交 管理员admin admin
          const { data } = await this.$axios({ url: '/auth/login', method: 'POST', data: this.form })
          // data.token  拦截器语法复制!
          // console.log(data)
          // 曾经：
          // localStorage.setItem('pc-token', 'Bearer ' + data.data.token)

          // 现在：调用vuex内 某个数据中心方法
          //      用法1：直接使用在视图state、getters、函数内部
          //      用法2：...mapXXX展开为键值对！只能放在methods、computed----->{对象内}
          this.$store.commit('user/set', data.data.token)

          this.$router.push({ path: '/dashboard' }) // 转跳二级路由第一个！
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  background: url(@/assets/小可爱.jpg) no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .el-card {
    width: 420px;
    ::v-deep .el-card__header{
      height: 80px;
      background: rgba(114,124,245,1);
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 18px;
    }
  }
  .el-form {
    padding: 0 20px;
  }
  .tc {
    text-align: center;
  }
}
</style>
