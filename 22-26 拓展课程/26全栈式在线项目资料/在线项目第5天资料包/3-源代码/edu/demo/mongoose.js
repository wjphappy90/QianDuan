const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

// 1. 创建一个模型架构，设计数据结构和约束
const studentSchema = mongoose.Schema({
  name: String,
  age: Number
})

// 2. 通过 mongoose.model() 将架构发布为一个模型（可以把模型认为是一个构造函数）
//    第一个参数就是给你的集合起一个名字，这个名字最好使用 帕斯卡命名法
//        例如你的集合名 persons ，则这里就命名为 Person，但是最终 mongoose 会自动帮你把 Person 转为 persons
//    第二个参数就是传递一个模型架构
const Student = mongoose.model('Student', studentSchema)

// 3. 通过操作模型去操作你的数据库
// 保存实例数据对象
// const s1 = new Student({
//   name: 'Mike',
//   age: 23
// })
// s1.save((err, result) => {
//   if (err) {
//     throw err
//   }
//   console.log(result)
// })

// 查询
// Student.find((err, docs) => {
//   if (err) {
//     throw err
//   }
//   console.log(docs)
// })

// Student.find({ name: 'Mike' },(err, docs) => {
//   if (err) {
//     throw err
//   }
//   console.log(docs)
// })

// 更新

// 删除

function Person(person) {
  this.name = person.name
  this.age = person.age
}

Person.find = function (condition, callback) {
  
}

Person.prototype.save = function (callback) {
  // 操作数据库
  MongoClient.connect(function (err, db) {
    db.collection('persons')
      .insertOne(this, callback)
  })
}

var p1 = new Person({
  name: 'Jack',
  age: 18
})

p1.save(function (err, result) {
  
})
