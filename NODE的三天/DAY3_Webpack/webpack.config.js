const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //告诉webpack在打包时的入口
  entry: './src/main.js',//告诉webpack在打包时的入口
  output: {
    path: path.resolve(__dirname, 'dist'),//输出到哪个文件夹路径下(webpack要求path必须是一个绝对路径)
    filename: 'bundle.js',//输出的文件名
  },
  //给webpack设置插件
  plugins:[new HtmlWebpackPlugin({
    //以此为基准生成打包后html文件
    template:'./public/jquery_index.html'
  })],
  module: { //给webpack配置加载器
    rules: [
      {
        test: /\.css$/i,  //以.css结尾的文件使用这个规则解析(i:不区分大小写)
        use: ["style-loader", "css-loader"],  //加载器的使用顺序,数组里从后往前用
        //css-loader让你能够引入.css文件和代码打包进js中
        //style-loader会把js内样式代码，插入到html中dom中style标签内
      },
      {
        test:/\.less$/i,
        use:[
          "style-loader", "css-loader","less-loader"
          //先让less-loader识别.less文件，并内置less把语法翻译成css
          //less文件转成css文件，所以后续还得需要css-loader和style-loader处理
        ],
      }
    ],
  },
};



