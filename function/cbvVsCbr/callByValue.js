function callByValue(value) { // B-375
  value *= 10;
  return value;
}
let initialValue = 10; // A-169
const newValue = callByValue(initialValue);

console.log('initialValue ', initialValue);
console.log('new value ', newValue);

// primitive types variables works on call by value