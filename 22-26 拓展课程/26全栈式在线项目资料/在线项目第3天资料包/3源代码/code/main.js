// 使用 babel-register 作为开发的编译转换环境
// 可以在代码运行的过程中实时编译转换
// 当前这个 mian.js 什么都不做
// 里面只需要加载一次 babel-register
// 并且指定要加载的自己的入口文件模块就可以了
require('babel-register')
require('./index.js')
