// let f = function (v) {
//   return v
// }

// let f = v => v + 'a'

// console.log(f(1))

// // 如果有多个参数，则必须加括号
// let add = (x, y) => x + y

// console.log(add(10, 20))

// 如果方法体有多条执行语句，则必须加 {}

// let add = (x, y) => {
//   console.log(x, y)
//   return x + y
// }

// console.log(add(10, 20))

// 箭头函数最好都用在匿名函数的地方
// let arr = [1, 2, 3]
// // arr.forEach(n => console.log(n))
// let newArr = arr.map(n => n + 1)
// console.log(newArr)

// function Person({ name = 'Jack', age = 18 }) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.sayHello = function () {
//   // 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
//   setTimeout(() => {
//     console.log(`hello name: ${this.name}, age: ${this.age}`)
//   }, 1000)
// }

// var p1 = new Person({})

// p1.sayHello()

// 不能作为构造函数使用
// let F = (x, y) => {
//   return x + y
// }

// var f = new F(10, 20)

// 箭头函数内容不能使用 arguments
// 使用 rest 参数代替
let f = (...args) => {
  console.log(args)
  return args[0] + args[1]
}

f(10, 20)
