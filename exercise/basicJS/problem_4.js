/**
Array:
- polyfill: What?
- some
*/
const arr = [4, 8, 2, 12];

function predicateOne(value){
  const isDivisibleBy2 = value % 2;
  if(isDivisibleBy2 === 0){
    return true;
  }
  return false;
};
function predicateTwo(value) {
  const isDivisibleBy4 = value % 4;
  if(isDivisibleBy4 === 0){
    return true;
  }
  return false;
};

const everyFlagValue = arr.every(predicateOne);
console.log('With Native every function, result for all values divisible by 2 is', everyFlagValue);

const everyFlagValueTwo = arr.every(predicateTwo);
console.log('With Native every function, result for all values divisible by 4 is', everyFlagValueTwo);

function myEvery(arr, fn){
  //Write your code here
  // use on native loops like for, while, do while
  return undefined;
}

const someFlagValueWithMyEvery = myEvery(arr, predicateOne);
console.log('With my every function, result for all values divisible by 2 is', someFlagValueWithMyEvery);

const someFlagValueTwoWithMyEvery = myEvery(arr, predicateTwo);
console.log('With my every function, result for all values divisible by 4 is', someFlagValueTwoWithMyEvery);
