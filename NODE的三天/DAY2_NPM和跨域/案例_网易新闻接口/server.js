import http from 'http'
import axios from 'axios'
const server = http.createServer()


let apiObj = {
  '/api/ypds': 'http://c.3g.163.com/nc/article/list/T1348649079062/0-20.html ',
  '/api/pydyuj': 'http://c.3g.163.com/nc/article/local/5bmz6aG25bGx/0-20.html',
  '/api/mjhw': 'http://c.m.163.com/nc/article/list/T1444270454635/0-20.html',
  '/api/ggdo': 'http://c.m.163.com/nc/article/list/T1444270454635/20-20.html',
}
server.on('request', (req, res) => {
  //支持浏览器Ajax跨域访问，*代表任意来源都可以来请求
  res.setHeader('Access-Control-Allow-Origin','*')
  if (req.url.startsWith('/api')) {
    if (apiObj[req.url]) {
      axios({
        url: apiObj[req.url]
      }).then(result => {
        //给请求返回数据
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(JSON.stringify(result.data))
      })
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('api地址不存在请核对,NotFound')
    }

  } else {
    //前端请求其它地址都走这个提示
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('欢迎使用接口服务')
  }
})
server.listen(3000, () => {
  console.log('服务器启动成功: http://1ocalhost:3000');
})