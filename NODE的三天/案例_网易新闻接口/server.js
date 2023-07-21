import http from 'http'
import axios from 'axios'
const server = http.createServer()
server.on('request', (req, res) => {
  if (req.url === '/api/head') {
    axios({
      url: 'https://sports.163.com/special/00051C9E/gjb_02.html'
    }).then(result => {
      //给请求返回数据
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.data))
    })
  } else {
    //前端请求其它地址都走这个提示
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('欢迎使用接口服务')
  }
})
server.listen(3000, () => {
  console.log('服务器启动成功: http://1ocalhost:3000');
})