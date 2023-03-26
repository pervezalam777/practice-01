/**
 * MDN - Search with "Array map mdn"
 * 
 * The following are most used higher order function
 * Array.map : convert one format to another and return new array
 * Array.filter: push only those item which are true as per condition
 * Array.some: Return true if any of the element meets the condition -> OR -> ||
 * Array.every: Return true when every element match the condition -> And -> &&
 * Array.sort: Sort function arrange item based on value 1, 0, -1 (Merge, selection, bubble)
 * 
 * Array.reduce:
 * Array.find
 * Array.findIndex
 * Array.forEach
 * 
 * -> what is prototype 
 */

function increaseByTen(value) {
  return value + 10;
}

function wrapInLiHTMLTag(value) {
  return `<li>${value}</li>`
}

const inputArr = [1,2,3,4];
const outputArr = inputArr.map(increaseByTen);
const outputAsLiMappedValues = inputArr.map(wrapInLiHTMLTag);

console.log('inputArr', inputArr);
console.log('outputArr', outputArr);
console.log('output as li mapped values', outputAsLiMappedValues)

Array.prototype.newMap = function(compareFn) {
  const length = this.length;
  const mappedArray = [];
  for(let index =0; index < length; index++) {
    const oldValue = this[index];
    const newValue = compareFn(oldValue);
    mappedArray.push(newValue);
  }
  return mappedArray;
}

Array.prototype.companyInfo = 'My company'

console.log('with my custom new map', inputArr.newMap(increaseByTen))
const worked = outputAsLiMappedValues.newMap(wrapInLiHTMLTag);
console.log('worked', worked)
console.log(inputArr.companyInfo)
console.log(outputArr.companyInfo)
