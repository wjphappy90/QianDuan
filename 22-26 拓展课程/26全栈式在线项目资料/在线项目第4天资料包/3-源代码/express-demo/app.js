// 需求一：用户访问 / 响应 hello world
// 需求二：用户访问 /login 响应 hello login
// 需求三：将 public 目录开放为类似于 Apache 一样，可以直接通过路径去取访问该目录中的任意资源

const express = require('express')
const fs = require('fs')

// 1. 调用 express() 方法，得到一个 app 实例接口对象（类似于 http.createServer 得到的 server 实例）
const app = express()

// 这个就表示是一个中间件
// 目前下面这个 API ，任何请求进来都会执行对应的处理函数
// 不关心当前请求的具体请求方法和请求路径
// 该代码内部如果不发送响应或者做进一步处理则代码会一直停在这里，不会往后执行
app.use(function (req, res, next) {
  const urlPath = req.path
  // /puiblic/a.css
  // /public/main.js
  if (urlPath.startsWith('/public/')) {
    const filePath = `.${urlPath}` // 这里加 . 的原因是因为如果读文件是以 / 开头的则会去当前文件所属磁盘根目录去查找
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else {
    // 如果请求路径不是以 /public/ 开头的，则调用 next ，next 是一个函数（不确定）
    // 这里调用了 next  的目的就是告诉 Express 继续往后执行：中间件
    // 具体执行哪个中间件：取决于对应的中间件的类型
    next()
  }
})

// 2. 通过 app 设置对应的路径对应的请求处理函数
//    回调处理函数中：
//      req 请求对象：用来获取当前客户端的一些请求数据或者请求报文信息
//          例如 req.query 用来获取查询字符串数据
//               req.method 用来当前请求方法
//      res 响应对象：用来向当前请求客户端发送消息数据的
//          例如 res.write('响应数据')
//               res.end() 结束响应
app.get('/', (req, res) => {
  res.write('hello ')
  res.write('expres')
  res.end()
})

app.get('/login', (req, res) => {
  // end 用来结束响应的同时发送响应数据
  res.end('hello login')
})

// 3. 开启监听，启动服务器
app.listen(3000, () => {
  console.log('服务已启动，请访问：http://127.0.0.1:3000/')
})
