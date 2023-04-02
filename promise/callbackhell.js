function executor(cb) {
  setTimeout(() => {
    cb('hi')
  }, 2000)
}

function callMe(cb) {
  function called(data) {
    cb(data+' pervez')
  }
  executor(called);
}

function finalFn(data) {
  console.log(data)
}

callMe(finalFn)
console.log('called first');