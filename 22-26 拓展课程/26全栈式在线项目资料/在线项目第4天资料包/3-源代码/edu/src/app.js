import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
import router from './router'
import queryString from 'querystring'

const app = express()

app.use('/node_modules', express.static(config.node_modules_path))
app.use('/public', express.static(config.public_path))

// 配置使用 nunjucks 模板引擎
// nunjucks 模板引擎没有对模板文件名的后缀名做特定限制
// 如果文件名是 a.html 则渲染的时候就需要传递 a.html
// 如果文件名是 b.nujs 则传递 b.nujs
nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app
})

// 解析处理表单 POST 请求体中间件
app.use((req, res, next) => {
  // 由于表单 POST 请求可能会携带大量的数据，所以在进行请求提价的时候会分为多次提交
  // 具体分为多少次进行提交不一定，取决于数据量的大小
  // 在 Node 中，对于处理这种不确定的数据，使用事件的形式处理
  // 这里可以通过监听 req 对象的 data 事件，然后通过对应的回调处理函数中的参数 chunk 拿到每一次接收到的数据
  //        data 事件触发多少次，不一定
  // 当数据接收完毕之后，会自动触发 req 对象的 end 事件，然后就可以在 end 事件中使用接收到的表单 POST 请求体
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    // 手动给 req 对象挂载一个 body 属性，值就是当前表单 POST 请求体对象
    // 在后续的处理中间件中，就可以直接使用 req.body 了
    // 因为在同一个请求中，流通的都是同一个 req 和 res 对象
    req.body = queryString.parse(data)
    next()
  })
})

// 挂载路由容器（路由容器中组织了网站功能处理路由中间件）
app.use(router)

app.listen(3000, () => {
  console.log('server is running at port 3000...')
})
