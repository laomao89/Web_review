import http from 'http'
const server = http.createServer()
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('欢迎使用接口服务')
})
server.listen(3000,() => {
  console.log('服务器启动成功: http://1ocalhost:3000');
})