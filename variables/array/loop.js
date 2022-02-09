// loops...
const loopOnArray = [4,5,3,6,7];
for(let i = 0; i < loopOnArray.length; i++){
  console.log(`index: ${i} value is ${loopOnArray[i]}`);
}

//Array.prototype.forEach()
loopOnArray.forEach((value, index) => {
  console.log(`ForEach - Value=${value} index=${index}`);
})

//Array.prototype.map()
const arrayWithMultiplyByTen = loopOnArray.map((value) => {
  return value * 10;
})
console.log('Updated array with multiply by ten',arrayWithMultiplyByTen);
console.log('Is new array ', (arrayWithMultiplyByTen === loopOnArray) === false);

//Array.prototype.reduce()
const totalAmount = loopOnArray.reduce((sum, amount) => sum + amount, 0);
console.log('Total amount is', totalAmount);

//
const result = loopOnArray.reduce((resultObject, amount) => {
  resultObject.sum += amount;
  resultObject.arrMulBy4.push(amount * 4)
  return resultObject;
}, {sum:0, arrMulBy4:[]});
console.log('New result object after reduce', result);