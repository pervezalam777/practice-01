const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

const deleteStatus = delete object1.property1; // cannot delete when sealed
console.log('object1 property1 still exists',object1.property1);
console.log('delete status of object1 of property1', deleteStatus)
// expected output: 33
const obj = {
  name:'pervez',
  age: 38
}
console.log('before age prop delete obj', obj)
const value = delete obj.age;
console.log('after delete age prop from obj', obj)
console.log('deleted value from obj', value);
