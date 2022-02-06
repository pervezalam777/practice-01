// Define
const menuList = [];
const voterList = new Array();

// What array can hold
const strArray = ['a', 'b', 'c'];
const iniArray = [10, 20, 30];
const booleanArray = [true, false, false, true];
const objArray = [{name:'pervez'}, {name:'arif'}, {name:'ram'}];
const arrOfArray = [[10, 20],['abc', 'xyz'], [true, false]]
/**
 * | 10    20    |
 * | 'abc' 'xyz' |
 * | true  false |
 */
const infiArray = [[[[[[[[[[10]]]]]]]]]]; //TODO: read this
const mixedArray = ['a', 10, true, {}, function(){}];

// Array.prototype.pop()
const popArray = [10, 20, 30];
console.log('Before pop popArray', popArray);
const popValue = popArray.pop();
console.log('After pop popArray', popArray);
console.log('pop value', popValue);

// Array.prototype.push()
const pushArray = [10, 20, 30];
console.log('Before push pushArray', pushArray);
const newLen = pushArray.push(40);
console.log('After pop pushArray', pushArray);
console.log('push new length', newLen);

// Array.prototype.shift()
const shiftArray = [100, 20, 30];
console.log('Before shift shiftArray', shiftArray);
const value = shiftArray.shift();
console.log('After shift shiftArray', shiftArray);
console.log('shift value', value);

// Array.prototype.unshift()
const unshiftArray = [10, 20, 30];
console.log('Before unshift unshiftArray', unshiftArray);
const newLength = unshiftArray.unshift(40);
console.log('After unshift unshiftArray', unshiftArray);
console.log('unshift new length', newLength);

//Data structure: Stack and queue