// 通过 let 声明的变量最大的特性就是：块级作用域

// 不存在变量提升
// console.log(foo)

let foo = 'bar'

if (true) {
  let foo = 'baz'
  if (true) {
    let foo = 'a'
    console.log(foo)
  }
  console.log(foo)
}

console.log(foo)

// var tmp = 123
// if (true) {
//   // 通过 let 声明的变量会绑定当前块级区域
//   // 只能先声明再使用
//   tmp = 'abc'
//   let tmp
// }

// 在同一个块级作用域中，不允许重复声明同一个变量
