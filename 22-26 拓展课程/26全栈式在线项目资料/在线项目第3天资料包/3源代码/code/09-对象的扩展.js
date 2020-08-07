// var foo1 = 'bar1'
// var foo2 = 'bar2'

// var obj = {
//   foo1: foo1,
//   foo2: foo2
// }

// var f = function () {

// }

// var obj = {
//   foo1,
//   foo2: foo2,
//   f,
//   f2() {
//     console.log('f2')
//   }
// }

// console.log(obj)

// var cart = {
//   _wheels: 4,

//   get wheels () {
//     return this._wheels;
//   },

//   set wheels (value) {
//     if (value < this._wheels) {
//       throw new Error('数值太小了！');
//     }
//     this._wheels = value;
//   }
// }

// console.log(cart.wheels)

// cart.wheels = 10

// console.log(cart.wheels)

// 对象属性成员的 get 和 set 方法适合做一些数据合法性校验
var xiaoming = {
  name: 'Jack',
  _age: 10,
  get age () {
    return this._age
  },

  set age (value) {
    if (value < 0 || value > 100) {
      throw new Error('年龄不合法')
    }
    this._age = value
  }
}

// console.log(xiaoming.age)

// xiaoming.age = -1

// console.log(xiaoming.age)

// 获取一个对象所有键名数组
console.log(Object.keys(xiaoming))
