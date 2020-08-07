// const [a, b, c] = [123, 456, 789]

// console.log(a, b, c)

var obj = {
  a: 'aaa',
  b: 'bbb'
}

// var a = obj.a
// var b = obj.b
var { b } = obj

console.log(b)

function get(url, {
  type = 'get'
}) {
  console.log(type)
}

get('baidu', {
  type: 'post'
})
