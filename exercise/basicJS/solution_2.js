/**
Array:
- polyfill: What?
- map
*/
const arr = [1,2,3,4,5];
const predicate = (v) => v * 2;
const mappedArr = arr.map(predicate);
console.log('original', arr);
console.log('mapped Arr', mappedArr);

function myMap(arr, fn){
  const newArr = [];
  for(let item of arr){
    const newValue = fn(item);
    newArr.push(newValue)
  }
  return newArr;
}

const mappedArrWithMyMap = myMap(arr, predicate);
console.log('original', arr);
console.log('mapped Arr With MyMap', mappedArrWithMyMap);
