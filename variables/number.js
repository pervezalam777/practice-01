// Number system
// Binary (0,1)
// Dec (0,1,2,3,4,5,6,7,8,9)
// Oct (0,1,2,3,4,5,6,7)
// Hex (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f)
// TODO: Will discuss later.
const alsOctNumber = 011;
const hexNumber = Number('0x11')    // 17
const binaryNumber = Number('0b11')    // 3
const octNumber = Number('0o11')    // 9

const str = 'Mozilla'; // M = 0, o = 1, z = 2, i = 3
console.log(str.substring(1, 3)); // expected output: "oz"
console.log(str.substring(2)); // expected output: "zilla"

const val = "0016 paid to ram"
const amount = Number(val.substring(0, 4))
console.log('expense', amount);