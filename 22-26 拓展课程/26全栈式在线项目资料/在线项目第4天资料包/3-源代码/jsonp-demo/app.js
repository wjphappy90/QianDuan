const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  console.log(`收到客户端请求了：${req.url}`)
  var data = JSON.stringify({
    foo: 'bar',
    list: [1, 2, 3]
  })
  setTimeout(function () {
    res.end(`${req.query.callback}(${data})`)
  }, 1000)
})

app.listen(3000, () => {
  console.log('running...')
})
