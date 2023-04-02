// function myExecutor(resolve, reject) {

// }

// function MyPromise(executor) {
//   function resolve(val) {
//   }
//   function reject() {}
//   executor(resolve, reject)
// }

// const promise = new MyPromise((() => {}, () =>{}) => {})

//const promise = new Promise(() => {}, () =>{});

/**'
 * promise.then().then().catch()
 */

const age = 18;

function executor(resolve, reject) {
  
  setTimeout(() => {
    if(age >= 18) {
      resolve('You can enter')
    } else {
      reject('You can not enter')
    }
  }, 2000)
}

const promise = new Promise(executor);

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

console.log('called first')