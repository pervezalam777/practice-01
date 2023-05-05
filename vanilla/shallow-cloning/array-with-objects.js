const arrOne = [{a: 10, text:'some'}, {a:20, text:'dummy'}];

const arrTwo = arrOne;
console.log('arrOne is also known as arrTwo', arrOne === arrTwo);

// spread operator (...)
const arrThree = [...arrOne]; // [arrOne[0], arrOne[1]]
console.log('arrOne is not same as arrThree', arrOne !== arrThree);
console.log('arrOne and arrThree object at position 1 is same', arrOne[0] === arrThree[0]);
console.log('arrOne and arrThree object at position 2 is same', arrOne[1] === arrThree[1]);
// console.log(arrOne[0])
// console.log(arrThree[0]);

const arrFour=[...arrOne]; // [arrOne[0], arrOne[1]]
arrFour[0] = {...arrOne[0]}; // [{...arrOne[0]}, arrOne[1]]
console.log('arrOne is not same as arrFour', arrOne !== arrFour);
console.log('arrOne and arrFour object at position 1 is not same', arrOne[0] !== arrFour[0]);
console.log('arrOne and arrThree object at position 2 is same', arrOne[1] === arrFour[1]);
// console.log(arrOne[0])
// console.log(arrFour[0]);

//---- 
arrFour[1].text = 'I will change all the references';
console.log(arrOne[1]); // {a:20, text:'dummy'}
console.log(arrTwo[1]); // {a:20, text:'dummy'}
console.log(arrThree[1]); // {a:10, text:'some'}
console.log(arrFour[1]); // {a:20, text: 'some'} // {a:20, text: 'I will change all the references'}
console.log('-------------------------------------');

arrFour[0].text = 'My new name is something';
console.log(arrOne[0]); // {a: 10, text:'some'}
console.log(arrTwo[0]); // {a: 10, text:'some'}
console.log(arrThree[0]); // {a: 10, text:'some'}
console.log(arrFour[0]); // {a: 10, text:'My new name is something'}

// if I change arrThree[0].text will it change arrOne[0].text and arrTwo[0].text and arrFour[0].text?

