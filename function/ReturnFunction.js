// process something
// input -> process -> output
// a and b is input for the sum function
// process is adding both a and b
// output is a final result which is a+b
function sum(a, b) {
  return a + b
}

console.log('without param : ', sum(), 'Not a number')
console.log('with number param:', sum(10), 'Not a number')
console.log('with number param:', sum(10, 30), ' Number ')
console.log('with string param:', sum('pervez', 'alam'), ' string concat ')
const output = sum([1,2,3], [4,5,6]); // array converted to string
console.log('with string param:', output, ' ', typeof output, [1,3].toString())
const objOutput = sum({name:"pervez"}, {age:20})
console.log('with object param:', objOutput, typeof objOutput, {add:'12234 gali'}.toString())

// TODO: Validate input of sum function


function makeATea(milk, water, teaLeaves, sugar, fire, pot){
  const teaProcess = `
   - Put ${pot} on ${fire}
   - Pour ${water}
   - Pour ${teaLeaves}
   - Pour ${sugar}
   - Wait for boiling
   - Pour ${milk}
   - Wait for boiling again
   - Tea is ready 
  `
  return teaProcess;
}

const teaProcess = makeATea();
console.log('What is tea process without any input')
console.log(teaProcess)

const teaProcessTwo = makeATea('1 cup milk', '1 cup water', '1 spoon teaLeaves', '2 spoon sugar', 'gas', 'pan');
console.log('What is tea process with all valid inputs')
console.log(teaProcessTwo)

/**
 * Types of return
 */

// - void/undefined
function display() {}
console.log('return void/undefined', display(), typeof display())

// - number
function numberFn() {
  console.log('I am number function')
  return 50;
  console.log('never ever com here');
}
console.log('return number', numberFn(), typeof numberFn())

// - string
function stringFn() {
  return '50'
}
console.log('return string', stringFn(), typeof stringFn())

// - boolean
function boolFn() {
  return true
}
console.log('return boolean', boolFn(), typeof boolFn())

// - array
function arrayFn() {
  return [1,3]
}
console.log('return array', arrayFn(), typeof arrayFn())

// - object
function objFn() {
  return {name:"Pervez"}
}
console.log('return object', objFn(), typeof objFn())

// - Promise
function promiseFn() {
  return new Promise(()=>{}, ()=>{})
}
console.log('return Promise', promiseFn(), typeof promiseFn())

// - date
function dateFn() {
  return new Date();
}
console.log('return date', dateFn(), typeof dateFn())


function findArrayValue(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element === value){
      return 'Found';
    }
  }
  return 'Not found';
}
let isFound = findArrayValue([1,2,3,4,5], 3);
console.log('When value exists ', isFound, typeof isFound);

isFound = findArrayValue([1,2,3,4,5], 33)
console.log('When value not exists ', isFound, typeof isFound);
