import express from 'express'

// 创建一个路由容器，将所有的路由中间件挂载给路由容器
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index.html')
})

router.post('/advert/add', (req, res, next) => {
  // 1. 接口客户端提交的数据
  // 2. 操作数据库
  // 3. 发送响应消息
  console.log(req.body)
})

// 通过 export default 暴露的接口成员不能定义的同时直接暴露
// 最好先定义，再暴露
// export default 可以直接暴露字面量 {} 123
export default router
