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

/**
> let obj = [1,2,4,5]
undefined

> JSON.stringify(obj)
'[1,2,4,5]'

> JSON.parse('[1,2,3,5]')
[ 1, 2, 3, 5 ]

> obj = { a: 10, b:20 }
{ a: 10, b: 20 }

> JSON.stringify(obj)
'{"a":10,"b":20}'

> JSON.parse('{"a":10,"b":20}')
{ a: 10, b: 20 }

 */