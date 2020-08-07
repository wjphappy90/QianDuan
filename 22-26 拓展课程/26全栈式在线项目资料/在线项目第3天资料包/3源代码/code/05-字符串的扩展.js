// 方法：
// includes
// startsWith
// endsWith
// repeat
// 模板字符串：凡是以后需要字符串拼接的地方都使用模板字符串
// 如果是普通的字符串，就还是通过原来的 单引号 去定义

let name = 'Jack'
// let foo = 'hello ' + 'abc' + name + 'aaa' + 'bbb'

// let str = 'There are <b>' + basket.count + '</b> ' +
//   'items in your basket, ' +
//   '<em>' + basket.onSale +
//   '</em> are on sale!'

// 模板字符串可以直接换行，原样输出，类似于 HTML 中的 textarea
let foo = `hello ${name} haha
大家好，我叫：${name}
调用函数：${f()}`

console.log(foo)

function f() {
  return 'hello'
}
