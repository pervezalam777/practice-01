
function canUserEnter(age) {
  function executor(resolve, reject) {
    setTimeout(() => {
      if(age >= 18){
        resolve(true)
      } else {
        reject('you do not pass the criteria')
      }
    }, 3000)
  }
  const p = new Promise(executor)
  return p;
}

// canUserEnter(18)
//   .then(greetOnEntry)

// const promise = canUserEnter(18);
// promise.then(greetOnEntry)


// function greetOnEntry() {
//   console.log('Hi welcome!!!')
// }

async function entryOfPerson(details) {
  try {
    const result = await canUserEnter(details.age);
    console.log('Hi ', details.name, ' welcome!!', result)
  } catch(error) {
    console.log('->',error, details.name)
  }
}

/**
 * function entryOfPerson(details) {
 *  canUserEnter(18)
      .then(() => {
        console.log('Hi ', details.name, ' welcome!!')
      })
      .catch(error => {
        console.log('->',error, details.name)
      })
 * }
 */

entryOfPerson({age: 18, name: 'pervez'});
entryOfPerson({age: 15, name: 'Ram'});
console.log('called first');