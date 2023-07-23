//一.目标:引入add.js方法并使用，打包两个js文件
//因为webpack会处理代码，会帮我们去拼装扩展名(所以.js不用写了)
//(1).先准备代码(2个js文件并引入使用)
// 注意: webpack打包时默认的入口叫src/index.js

//(2).开始执行打包
// 执行package.json里script里key就是自定义命令
// 语法: npm run 自定义命令
// 效果:打包后"自动"产生dist文件夹(里面就是翻译整合压缩后代码)
// webpack在翻译和预执行代码时，发现addFn函数以后没有使用，所以它直接把预执行的结果直接打包了
// 如果你想执行你写的代码，请执行打包后的代码(运行打包后)
// webpack能翻译import语法，无需修改typemodule

//二.目标:代码更新后，只要重新打包即可
import { addFn } from "./add/add.js";
import { getArraySum } from "./tool/tool.js";
import $ from "jquery";
import axios from 'axios'
const res1 = addFn(12, 12);
const res2 = getArraySum([1, 2, 3, 4]);
console.log(res1);
console.log(res2);

//使用jQuery渲染颜色(不用管)
$(() => {
  $('#myUL>li:nth-child(2n+1)').css('color', 'red')
  $('#myUL>li:nth-child(2n)').css('color', 'yellow')
})

//三:使用axios包，请求图书数据，并循环标签铺设页面
//为何axios内部用module.exports导出,为何我能用import导入(而且webpack会把导出和导入都转换成CommonJS规范)
// axios({
//   url: 'http://ajax-api.itheima.net/api/books'
// }).then(({ data: res }) => {
//   document.querySelector('#myUL').innerHTML = res.data.map(obj => {
//     return `<li>${obj.bookname}</li>`
//   }).join('')
// })

//注意:index.html无法直接识别import等语法,需要node+webpack先把语法翻译后并输出，
// 我们的index.html引入打包翻译后的代码执行
// 前端无法直接使用npm管理第三方的包
// 因为node+webpack出现，先在node环境下，先用npm下包，编写业务的js代码
// 打包后，把打包后的代码放入到htm1中进行运行

//四:引入css文件
import './css/index.css'  //目的:是为了让css参与打包，webpack会把css代码打包进dist/bundle.js中
// 默认:webpack只能打包js代码



