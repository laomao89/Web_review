const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 3000, // 开发服务器端口号
    open: true // 启动时候，自动打开浏览器
  }
  // lintOnSave:false, //代码重新编译时，不需要eslint代码格式校验
})
