new Promise((resolve, reject) => {
  resolve(1, 2)
})
.then((data1, data2) => {
  console.log(data1, data2)
})
