const express = require('express')
const fs = require('fs')
const path = require('path')
const static = require('./middlwares/static')

const app = express()

app.use((req, res, next) => {
  const log = `请求方法：${req.method}  请求路径：${req.url} 请求时间：${+new Date()}\n`
  fs.appendFile('./log.txt', log, err => {
    if (err) {
      return console.log('记录日志失败了')
    }
    next()
  })
})

// 中间件：用来处理 http 请求的一个具体的环节（可能要执行某个具体的处理函数）
//         中间件一般都是通过修改 req 或者 res 对象来为后续的处理提供便利的使用
// 中间件分类：
//     use(function () {req, res, next})  不关心请求方法和请求路径，没有具体路由规则，任何请求都会进入该中间件
//     use('请求路径', function (req, res, next) {}) 不关心请求方法，只关心请求路劲的中间件
//     get('请求路径', function (req, res, next) {}) 具体路由规则中间件
//     post('请求路径', function (req, res, next) {})
// 中间件的作用：
//    

// app.use('/public', express.static('开放目录的路径'))

// 在 use 方法中，如果指定了第一个路径参数，则通过 req.path 获取到的是不包含该请求路径的字符串
// 例如当前请求路劲是 /public/a.jpg 则通过 req.path 拿到的就是 a.jpg
//                    /public/a/a.css a/a.css
//                 目前已知传递给了 static 方法一个绝对路径 c:/project/public
//                 假设目前请求是 /public/a/a.css 拿到的 req.path a/a.css
//                 c:/project/public + a/a.css 拼接起来，读取
app.use('/public', static(path.join(__dirname, 'public')))
app.use('/node_modules', static(path.join(__dirname, 'node_modules')))

app.get('/', (req, res, next) => {
  console.log('/ 111')
  res.end('hello')
  next()
})

app.get('/', (req, res, next) => {
  console.log('/ 222')
  // 1. 在 http 中，没有请求就没有响应，服务端不可能主动给客户端发请求，就是一问一答的形式
  // 2. 对于一次请求来说，只能响应一次，如果发送了多次响应，则只有第一次生效
  res.end('world')
  next()
})

app.use((req, res, next) => {
  console.log(111)
  // 假如有请求进入了该中间件，这里调用的 next 会执行下一个能匹配的中间件
  // get /
  // get /a
  next()
})

// /  111 222 333
// /a 111 use /a
// /a next() 111 use/a 222 333
app.use('/a', (req, res, next) => {
  console.log('use /a')
  next()
})

app.use((req, res, next) => {
  console.log(222)
  next()
})

app.use((req, res, next) => {
  console.log(333)
})

app.listen(3000, () => {
  console.log('服务已启动，请访问：http://127.0.0.1:3000/')
})
