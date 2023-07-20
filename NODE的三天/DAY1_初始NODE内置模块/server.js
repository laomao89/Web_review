//目标:利用node内置http模块，创建一个web服务
//1.引入http对象
import http from 'http'
//2创建web服务对象server
const server = http.createServer()
//3检测请求事件(request事件名固定)，并做出响应结果
//别人对我请求来了，后面的事件处理函数执行
server.on('request', (req, res) => {
  //req:请求对象(包含了请求方发来的信息)
  //res:响应对象(包含了属性和方法，用于做出响应
  res.statusCode = 200 // 设置本次响应状态码
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');// 设置本次响应体内容类
  // text/plain(普通文本)，并指定编码方式为utf-8正确让前端解析中文
  //响应头交给:浏览器去如何解析响应体内容
  res.end('hello，欢迎访问node创建的web服务') // 设置本次响应体(只能是字符串/BufFer) 
})

//4web服务配置端口号(有效范围0-65535之间的任意整数)
//1024以下被计算机内部占用
server.listen(3000,() => {
  console.log('启动成功');
})

/*
一次上网的过程
浏览器(客户端)
ur1地址
服务器(本机默认就是127.0.0.1或者1ocalhost)
web服务(node+http创建的)
*/