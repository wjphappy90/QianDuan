import queryString from 'querystring'

export default (req, res, next) => {
  // req.headers 可以拿到当前请求的请求报文头信息
  if (!req.headers['content-length']) {
    console.log('进入 body-parser 了')
    return next()
  }
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    req.body = queryString.parse(data)
    next()
  })
}
