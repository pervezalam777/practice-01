const arr = [1000, 2, 5, 1, 2]; // expected [1, 2, 5, 1000];

arr.sort();

console.log(arr)

const shortcutFn = (a, b) => a - b;

const sortFn = (a, b) => {
  if(a > b) {
    return -1;
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
} 

arr.sort(sortFn) 
/**
 * 1 = bigger
 * -1 = smaller
 * 0 = same or equal
 */

console.log(arr)