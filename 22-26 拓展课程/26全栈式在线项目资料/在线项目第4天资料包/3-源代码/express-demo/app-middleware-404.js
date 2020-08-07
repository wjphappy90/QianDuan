const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', function aaa(req, res, next) {
  // 通过 JSON.parse 解析查询字符串中的某个
  try {
    const data = JSON.parse('{abc')
    res.json(data)
  } catch (e) {
    next(e)
  }
})

app.get('/a', (req, res, next) => {
  fs.readFile('./dnsajndsja', (err, data) => {
    if (err) {
      // 这里调用的 next 会被 app.use((err, req, res, next)) 这个中间件匹配到
      next(err)
    }
  })
})

app.get('/b', (req, res, next) => {
  res.end('hello index')
})

// 该中间件只有被带有参数的 next 才能调用到
//    带参数的 next 只能被具有四个参数的处理中间件匹配到
// 注意：这里一定要写全四个参数，否则会导致问题
// 这个中间件就是用来全局统一处理错误的
app.use((err, req, res, next) => {
  const error_log = `
====================================
错误名：${err.name}
错误消息：${err.message}
错误堆栈：${err.stack}
错误时间：${new Date()}
====================================\n\n\n`
  fs.appendFile('./err_log.txt', error_log, err => {
    res.writeHead(500, {})
    res.end('500 服务器正忙，请稍后重试')
  })
})

// 404 处理中间件
app.use((req, res, next) => {
  res.end('404')
})

app.listen(3000, () => {
  console.log('running...')
})
