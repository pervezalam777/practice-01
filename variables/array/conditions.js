// Array.prototype.every()
const arr = [3,6,9,12,15,30];
const checkDivisibleByThree = (value) => {
  return value % 3 === 0;
};
let isDivisibleByThree = arr.every(checkDivisibleByThree)
console.log('arr is divisible by 3', isDivisibleByThree);

const arrTwo = [3,6,9,12,11,30] 
isDivisibleByThree = arrTwo.every(checkDivisibleByThree)
console.log('arrTwo is divisible by 3', isDivisibleByThree);

// Array.prototype.filter()
const rawArrayForFilter = [3,6,9,12,11,30];
const filteredArray = rawArrayForFilter.filter(checkDivisibleByThree);
console.log('raw array for filter', rawArrayForFilter)
console.log('filtered array ', filteredArray);

// Array.prototype.find()
const rawFindArray = [
  {name:'pervez', age:38},
  {name:'Narender', age:38},
  {name: 'Ram', age: 34},
  {name: 'arif', age: 37}
];

const findRam = rawFindArray.find((value) => {
  return value.name.toLowerCase() === 'ram'
})
console.log('ram object holds ', findRam);

// Array.prototype.some()
// Array.prototype.findIndex()
// Array.prototype.includes()
// Array.prototype.indexOf()