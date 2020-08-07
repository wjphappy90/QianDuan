import express from 'express'
import Advert from '../models/advert'

// 创建一个路由容器，将所有的路由中间件挂载给路由容器
const router = express.Router()

router.get('/advert', (req, res, next) => {
  res.render('advert_list.html')
})

router.get('/advert/add', (req, res, next) => {
  res.render('advert_add.html')
})

/**
 * POST /advert/add
 * body: { title, image, link, start_time, end_time }
 */
router.post('/advert/add', (req, res, next) => {
  // 1. 接收表单提交的数据
  const body = req.body
  
  // 2. 操作数据库
  const advert = new Advert({
    title: body.title,
    image: body.image,
    link: body.link,
    start_time: body.start_time,
    end_time: body.end_time,
  })

  advert.save((err, result) => {
    if (err) {
      return next(err)
    }
    res.json({
      err_code: 0
    })
  })
})

router.get('/advert/list', (req, res, next) => {
  Advert.find((err, docs) => {
    if (err) {
      return next(err)
    }
    res.json({
      err_code: 0,
      result: docs
    })
  })
})

// /advert/one/:advertId 是一个模糊匹配路径
// 可以匹配 /advert/one/* 的路径形式
// 例如：/advert/one/1 /advert/one/2 /advert/one/a /advert/one/abc 等路径
// 但是 /advert/one 或者 /advert/one/a/b 是不行的
// 至于 advertId 是自己起的一个名字，可以在处理函数中通过 req.params 来进行获取
router.get('/advert/one/:advertId', (req, res, next) => {
  Advert.findById(req.params.advertId, (err, result) => {
    if (err) {
      return next(err)
    }
    res.json({
      err_code: 0,
      result: result
    })
  })
})

// /advert/edit
router.post('/advert/edit', (req, res, next) => {
  Advert.findById(req.body.id, (err, advert) => {
    if (err) {
      return next(err)
    }
    const body = req.body
    advert.title = body.title
    advert.image = body.image
    advert.link = body.link
    advert.start_time = body.start_time
    advert.end_time = body.end_time
    advert.last_modified = Date.now()

    // 这里的 save 因为内部有一个 _id 所以这里是不会新增数据的，而是更新已有的数据
    advert.save((err, result) => {
      if (err) {
        return next(err)
      }
      res.json({
        err_code: 0
      })
    })
  })
})

router.get('/advert/remove/:advertId', (req, res, next) => {
  Advert.remove({ _id: req.params.advertId }, err => {
    if (err) {
      return next(err)
    }
    res.json({
      err_code: 0
    })
  })
})

export default router
