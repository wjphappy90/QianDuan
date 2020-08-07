// const 也是类似于 var
// 但是用来声明一个不变的量，叫做常量
// 声明的同时，必须初始化
// 一旦声明，以后不允许修改，否则报错
// 和 let 一样，也是块级作用域
// 不存在变量提升
// 不允许重复声明

const foo = 'bar'

console.log(foo)

// 以后看到  Assignment to constant variable. 这种报错，一定是尝试去改变 const 定义的常量了
foo = 'baz'

// 什么时候使用 const 和 let
// 能用 const 的情况下，少用 let
// 在 es6 中就不要使用 var 了
