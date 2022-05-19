function callByReference(value) { // A-169
  value.push(50);
  return value;
}

const arr = [10, 11, 12, 15]; // A-169
const newArr = callByReference(arr); // A-169

console.log('arr', arr);
console.log('newArr', newArr);
console.log('are arr and newArr same', arr === newArr);