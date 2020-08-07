const fs = require('fs')

readFile('./data/4.txt', 'utf8')
  .then(data => {
    console.log(data)
    return readFile('./data/2.txt', 'utf8')
  })
  .then(data => {
    console.log(data)
    JSON.parse('{dsadsa')
    return readFile('./data/3.txt', 'utf8')
  })
  .then(data => {
    console.log(data)
  })
  // 在使用 Promise 做异步流程控制的时候，关于异常的处理可以通过在最后一个 then 之后设置一个 catch
  // 然后指定一个失败处理函数
  // 该函数可以捕获前面所有的 Promise 对象本身以及 then 内部的任务错误
  // 当前面任何一个发生异常，直接进入 catch，后续所有的 Promise 包括 then 不再执行
  .catch(err => {
    console.log(err)
  })

function readFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
