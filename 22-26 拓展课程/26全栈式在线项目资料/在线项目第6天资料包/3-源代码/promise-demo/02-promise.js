/**
 * Promise 在 Ecmascript 6 中体现出来就是一个对象
 * Promise 是一个容器
 * 一般用来封装一个异步操作
 *   异步操作是一个无法预测的事情，要吗成功，要吗失败
 * 容器内部有三种状态：
 *     pending  正在处理
 *     resolved 成功，已解决
 *     rejected 驳回，失败
 */

const fs = require('fs')

// Promise 对象一经创建，立即执行
new Promise((resolve, reject) => {
  fs.readFile('./data/2.txt', (err, data) => {
    if (err) {
      // 当 Promise 对象内部的异步操作结果失败的时候，告诉 Promise 对象容器，该异步任务失败了
      // 其实就是将 Promise 内部的 Pending 状态改为 Rejected
      reject(err)
    }
    // 当代码执行到这里，说明该 Promise 对象内部的异步操作没有错误发生，证明成功了
    // 然后在这里将 Promise 内部的 Pending 状态改为 Resolved
    resolve(data)
  })
})
// Promise 实例对象有一个方法：then 方法
// then 需要传递两个回调处理函数
// 其中第一个回调处理函数就是 Promise 对象内部的  resolve 函数
// 第二个回调处理函数是可选的，如果传递则就是 Promise 对象内部的 reject 函数
.then((data) => {
  console.log(111)
  console.log(data.toString())
  return new Promise((resolve, reject) => {
    fs.readFile('./data/3.txt', (err, data) => {
      if (err) {
        // 这里没有使用 return 的原因就是 Promise 的状态只能从 Pending 变为 Resolve 或者 Rejected
        // 状态一旦改变，就不会再发生变化
        reject(err)
      }
      resolve(data)
    })
  })
}, (err) => {
  console.log('读取文件失败了')
})
// then 方法之后可以继续链式调用 then
// 后续的每一个 then 中指定的回调处理函数都会被执行
// 后续的 then 中指定的回调处理函数可以接收上一个 then 中指定的成功的回调处理函数的返回结果
//    1. 没有返回值，默认就是 undefined
//    2. 有普通的返回值，数字、字符串、对象、数组。。。
//    3. 返回一个新的 Promise 对象
.then((data) => {
  console.log(222)
  console.log(data.toString())
  return new Promise((resolve, reject) => {
    fs.readFile('./data/1.txt', (err, data) => {
      if (err) {
        // 这里没有使用 return 的原因就是 Promise 的状态只能从 Pending 变为 Resolve 或者 Rejected
        // 状态一旦改变，就不会再发生变化
        reject(err)
      }
      resolve(data)
    })
  })
})
.then((data) => {
  console.log(333)
  // 二进制数据调用 toString() 方法可以转换为普通的字符，默认就是 utf8 编码
  console.log(data.toString())
})
