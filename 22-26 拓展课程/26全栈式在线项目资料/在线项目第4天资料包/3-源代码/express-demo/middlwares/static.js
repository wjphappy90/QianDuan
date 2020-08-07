const fs = require('fs')
const path = require('path')

module.exports = function (dirPath) {
  // 这里不需要调用 next
  // 因为如果不是以 /public 开头的，当前这个中间件压根儿就不会进来
  return (req, res, next) => {
    const filePath = path.join(dirPath, req.path)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  }
}
