// inner function is closure
function main(age) {
  return function() {
    return (age >= 18)
  }
}

const checkValidAgeFn = main(10); // checkValidAgeFn contains closure function reference
const isValidAge = checkValidAgeFn(); // closure function called
console.log('is valid age', isValidAge);

const checkValidAgeFn1 = main(20); // checkValidAgeFn1 contains closure function reference
const isValidAge1 = checkValidAgeFn1(); // closure function called
console.log('is valid age 1', isValidAge1);

console.log('checkValidAgeFn == checkValidAgeFn1', checkValidAgeFn == checkValidAgeFn1)