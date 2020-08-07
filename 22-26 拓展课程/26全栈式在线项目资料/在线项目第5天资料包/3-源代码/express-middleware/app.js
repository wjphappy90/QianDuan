const express = require('express')

const app = express()

/**
 * 在同一个请求处理的所有中间件中，流通的都是同一个 req 和 res 对象
 */

// /

app.use((req, res, next) => {
  req.a = 123
  res.hello = function () {
    console.log('hello')
  }
  next()
})

app.use((req, res, next) => {
  req.b = 456
  res.hello()
  next()
})

app.use((req, res, next) => {
  console.log(req.a, req.b)
})

app.listen(3000, () => {
  console.log('running...')
})
