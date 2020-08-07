const fs = require('fs')
const express = require('express')
const formidable = require('formidable')

const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
  res.render('index')
})

// 这里处理具有文件提交的表单，使用一个第三方包：formidable
app.post('/', (req, res, next) => {
  // parse a file upload 
  const form = new formidable.IncomingForm()

  // 指定上传路径
  form.uploadDir = './upload'

  // 保持原来的扩展名
  form.keepExtensions = true

  // err 就是可能发生的错误对象
  // fields 就是普通的表单字段
  // files 就是文件内容数据信息
  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err
    }
    // console.log(fields)
    console.log(files)
    res.end('success')
  })
})

app.listen(3000, () => {
  console.log('running...')
})
