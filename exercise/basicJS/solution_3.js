/**
Array:
- polyfill: What?
- some
*/
const arr = [1,2,3,4,5];

//const predicate = (v) => v % 2 === 0;
//const predicateTwo = (v) => v % 7 === 0;


function predicate(value) {
  const reminder = value % 2;
  //console.log('--------> ',value, reminder)
  if(reminder === 0){
    return true;
  } else {
    return false;
  }
}

function predicateTwo(value) {
  const reminder = value % 7;
  //console.log('predicateTwo --------> ',value, reminder)
  if(reminder === 0){
    return true;
  } else {
    return false;
  }
}

const someFlagValue = arr.some(predicate);
console.log('some flag value', someFlagValue);

const someFlagValueTwo = arr.some(predicateTwo);
console.log('some flag value two', someFlagValueTwo);

function myEvery(arr, fn){
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]; // value 
    //console.log('fn',fn)
    const result = fn(element);
    //console.log('element', element, ' result ', result);
    if(result === true){
      return true;
    }
  }
  return false;
}

const someFlagValueWithMySome = myEvery(arr, predicate);
console.log('some flag value with my some', someFlagValueWithMySome);

const someFlagValueTwoWithMySome = myEvery(arr, predicateTwo);
console.log('some flag value two with my some', someFlagValueTwoWithMySome);
