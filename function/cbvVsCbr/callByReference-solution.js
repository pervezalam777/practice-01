// immutability should be achieved
function callByReference(value) { // A-169
  //const newValue = [...value]; // B-375
  const newValue = JSON.parse(JSON.stringify(value));
  newValue.push(50);
  return newValue;
}

const arr = [10, 11, 12, 15]; // A-169
const newArr = callByReference(arr); // A-169

console.log('arr', arr);
console.log('newArr', newArr);
console.log('are arr and newArr same', arr === newArr);