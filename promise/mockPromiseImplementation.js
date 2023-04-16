function myExecutor(resolve, reject) {

}

function MyPromise(executor) {
  const thenArr = [];
  function resolve(val) {
    
  }
  function reject(val) {}

  this.then = (fn) => {
    thenArr.push(fn)
    return this;
  }
  executor(resolve, reject)
}


function firstThenFn(value) {
  console.log(value);
  return `welcome!!!`
}

function secondThenFn(newValue) {
  console.log(newValue)
}

promise
  .then(firstThenFn)
  .then(secondThenFn)
  .catch((error) => {
    console.log('---> ',error)
  })
