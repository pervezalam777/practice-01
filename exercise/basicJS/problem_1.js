/**
Array:
- polyfill: What?
- filter
*/
const arr = ['some', 'amount', 'some', 'value'];
const predicate = (v) => v ==='some';
const filterArr = arr.filter(predicate);
console.log('filter array', filterArr);

function myMap(arr, fn){
  //Write your code here
  return [];
}

const filterWithMyFilter = myMap(arr, predicate);
console.log('filter With My Filter', filterWithMyFilter);
