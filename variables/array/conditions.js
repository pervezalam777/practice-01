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
const areSomeOfValuesDivisibleBy3 = arrTwo.some(checkDivisibleByThree);
console.log('are Some Of Values Divisible By 3 in arrTwo', areSomeOfValuesDivisibleBy3);

// Array.prototype.findIndex()
const arrFindIndex = ['Pervez', 'alam', 'Arif', 'Narender', 'Ram'];
function searchPerson(name) {
  return function(nextName) {
    return nextName === name;
  }
}
let index = arrFindIndex.findIndex((name) => {
  return name === 'Arif';
})
console.log('Is Arif available in the list', index > -1, ' and at index', index);

index = arrFindIndex.findIndex(searchPerson('Ram'));
console.log('Is Ram available in the list', index > -1, ' and at index', index);

index = arrFindIndex.findIndex(searchPerson('Vijay'));
console.log('Is Vijay available in the list', index > -1, ' and at index', index);

// Array.prototype.includes()
const arrIncludes = ['red', 'green', 'blue', 'black'];
let isFound = arrIncludes.includes('green');
console.log('Is green available in the list ', isFound);
isFound = arrIncludes.includes('white');
console.log('Is white available in the list ', isFound);

// Array.prototype.indexOf()
const arrIndexOf = ['red', 'green', 'blue', 'black'];
let indexOf = arrIndexOf.indexOf('blue');
console.log('Index of blue color in arrIndexOf', indexOf);

indexOf = arrIndexOf.indexOf('white');
console.log('Index of white color in arrIndexOf', indexOf);
