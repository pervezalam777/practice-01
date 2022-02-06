// Array.prototype.sort()
const unsortedArray = [9,10,7,6,3,1,2,20];
unsortedArray.sort();
console.log('unsorted array after sort function applied', unsortedArray)
const stringBasedUnsortedList = ['bob', 'arif', 'joe','ram', 'narender'];
stringBasedUnsortedList.sort();
console.log('stringBasedUnsortedList array after sort function applied', stringBasedUnsortedList);
//TODO: own compare method.

// Array.prototype.reverse()
const list = ['bob', 'arif', 'joe','ram', 'narender'];
list.reverse();
console.log('list after reverse', list);

// Array.prototype.concat()
const arrOne = [10, 20, 30];
const arrTwo = [30,40,50];
const concatArray = arrOne.concat(arrTwo);
console.log('concat array', concatArray);
console.log('arrOne still same', arrOne);
console.log('arrTwo still same', arrTwo);

// Array.prototype.join()
const sen = ['Ram','is','a','famous','person'];
console.log(sen.join(''));
console.log(sen.join(' '));
console.log(sen.join('$'));