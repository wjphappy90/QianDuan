const nunjucks = require('nunjucks')

// nunjucks.configure({ autoescape: true });
// const result = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
// console.log(result)

// 这里的 views 相对路径是受 node 执行路径影响的
nunjucks.configure('views', { autoescape: true });
// var result = nunjucks.render('index.html', { foo: 'bar' });
var result = nunjucks.render('login.html');
console.log(result)
