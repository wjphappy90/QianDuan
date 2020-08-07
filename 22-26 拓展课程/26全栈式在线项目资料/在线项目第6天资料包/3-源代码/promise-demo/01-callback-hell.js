const fs = require('fs')

fs.readFile('./data/1.txt', (err, data) => {
  console.log(111)
  fs.readFile('./data/2.txt', (err, data) => {
    console.log(222)
    fs.readFile('./data/3.txt', (err, data) => {
      console.log(333)
    })
  })
})

// Promise
