const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log('obj prop does not change so it should be 42 ===', obj.prop);
// expected output: 42

const object1 = {
  property1: 42
};

console.log('Is object1 is frozen? ',Object.isFrozen(object1));
// expected output: false

Object.freeze(object1);

console.log('Is object1 is frozen? ',Object.isFrozen(object1));
// expected output: true

object1.name = 'Arif';

console.log('Print new property on object1 ', object1.name);
//
const objOne = {
  name: 'Pervez'
}

objOne.name = 'alam';
console.log(objOne.name);

//objOne = { age: 38 };