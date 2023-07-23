const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: "development",   //打包模式：值有两种
  //'development'(开发模式),打包代码不会极致压缩，它寻求的是"本地访问启动"快
  //'production'(生产模式),打包代码要极致压缩，为了让"客户访问网页更快"


  entry: './src/main.js',//告诉webpack在打包时的入口
  devServer: {
    port: 2022, //端口号
    open: true,  //启动后自动打开浏览器
  },
  output: {
    path: path.resolve(__dirname, 'dist'),//输出到哪个文件夹路径下(webpack要求path必须是一个绝对路径)
    filename: 'bundle.js',//输出的文件名
  },
  //给webpack设置插件
  plugins: [
    new HtmlWebpackPlugin({
      //以此为基准生成打包后html文件
      template: './public/jquery_index.html'
    }),
    new MiniCssExtractPlugin({
      //对输出css文件进行重命名
      filename:'index.css',
    })

  ],
  module: { //给webpack配置加载器
    rules: [
      // {     //在生成单独的css文件时此代码不关闭可能存在报错无法打包的情况.
      //   // 解决:如果出现打包报错的情况下注释此代码再打包就行了
          //web开发服务器开启时也要关闭此代码
      //   test: /\.css$/i,  //以.css结尾的文件使用这个规则解析(i:不区分大小写)
      //   use: ["style-loader", "css-loader"],  //加载器的使用顺序,数组里从后往前用
      //   //css-loader让你能够引入.css文件和代码打包进js中
      //   //style-loader会把js内样式代码，插入到html中dom中style标签内
      // },
      {
        test: /\.css$/i, // 所有后缀位.css的文件,不区分大小写
        use: [
            // 创建style标签，将样式放入
            // 'style-loader',
            // 这个loader取代style-loader。作用：提取js中的css成单独文件
            MiniCssExtractPlugin.loader,
            // 将css文件整合到js文件中
            'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader", "css-loader", "less-loader"
          //先让less-loader识别.less文件，并内置less把语法翻译成css
          //less文件转成css文件，所以后续还得需要css-loader和style-loader处理
        ],
      },
      { //webpack5版本，它把图片处理的加载器内置了，只需要设置加载器规则即可
        test: /\.(png|jpg|gif|jpeg)$/i, //匹配图片文件
        type: 'asset'  //在导出一个data url 和一个单独的文件之间自动选择
      },
      {
        test: /\.m?js$/, //匹配js结尾文件
        exclude: /(node_modules|bower_components)/,  //不转换这两个文件夹里的js
        use: {
          loader: 'babel-loader',  //使用加载器-处理
          options: {
            presets: ['@babel/preset-env']   //预设:转码规则（用bable开发环境本来预设的）
          }
        }
      }
    ],
  },
};



