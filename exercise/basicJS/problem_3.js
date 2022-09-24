/**
Array:
- polyfill: What?
- some
*/
const arr = [1,2,3,4,5];

const predicate = (v) => v % 2 === 0;
const predicateTwo = (v) => v % 7 === 0;

const someFlagValue = arr.some(predicate);
console.log('some flag value', someFlagValue);

const someFlagValueTwo = arr.some(predicateTwo);
console.log('some flag value two', someFlagValueTwo);

function myEvery(arr, fn){
  //Write your code here
  // use on native loops like for, while, do while
  return false;
}

const someFlagValueWithMySome = myEvery(arr, predicate);
console.log('some flag value with my some', someFlagValueWithMySome);

const someFlagValueTwoWithMySome = myEvery(arr, predicateTwo);
console.log('some flag value two with my some', someFlagValueTwoWithMySome);
