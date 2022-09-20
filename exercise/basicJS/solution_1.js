/**
Array:
- polyfill: What?
- filter
*/
const arr = ['some', 'amount', 'some', 'value'];
const predicate = (v) => v ==='some';
// predicate function can be written as follows

// function filterLogic(value) {
//   if(value === 'some'){
//     return true;
//   }
//   return false;
// }

const filterArr = arr.filter(predicate);
console.log('filter array', filterArr);

function myMap(arr, fn){
  const newArr = [];
  for(let item of arr){
    if(fn(item)){
      newArr.push(item)
    }
  }
  return newArr;
}

const filterWithMyFilter = myMap(arr, predicate);
console.log('filter With My Filter', filterWithMyFilter);
