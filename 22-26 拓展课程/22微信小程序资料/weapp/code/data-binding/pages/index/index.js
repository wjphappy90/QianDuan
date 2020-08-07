Page({
  // 为页面提供数据的
  // data就是界面和逻辑之间的桥梁
  data: {
    message: 'Hello world',
    person: {
      name: 'zhangsan',
      age: 18
    },
    viewClassName: 'hello',
    todos: [
      { name: 'JavaScript', completed: false },
      { name: 'HTML', completed: true },
      { name: 'CSS', completed: false }
    ],
    item: 'hahaha'
  }
})
