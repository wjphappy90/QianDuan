// 默认值最好作为函数的最后一个参数
// 如果是前面的参数默认值，则不能省略，不能跳过
// function f(x = 20, y = 10) {
//   console.log(x, y)
// }

// f()

// ...args 叫做 rest 参数
// ...args 是一种语法，...不能省略，args 是随便起的一个名字
// ...args 可以将用户传递进来的参数包装到一个数组中
// ...args 是把用户传递参数的没有对应到具体形参的变量解析到一个数组中
// function f(a, ...args) {
//   let sum = 0
//   for(let num of args) {
//     sum += num
//   }
//   console.log(sum)
// }

// f(1, 2, 3)

// let arr = [1, 2, 3]

// // ... 扩展运算符，可以将一个数组展开
// console.log(...arr)

// let arr1 = [123, 456]
// let arr2 = [789,111]

// let result = [...arr1, ...arr2]

// console.log(result)

// function f(x, y, z) {
//   console.log(x, y, z)
// }

// var arr = [1, 2, 3]

// f.apply(null, arr)
// f(...arr)
