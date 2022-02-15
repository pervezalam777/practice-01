let str = "This is \"some\" string 223";
let secondStr = 'this <b>is</b> "second" string 34';
let strTem = `this 
<b>dasd</b> "asdf"
asdfasdf 'asdf'
`;

console.log('type of str ',typeof str);
console.log('type of secondStr ',typeof secondStr);
console.log('type of strTem', typeof strTem);

console.log(secondStr);
console.log(str)

console.log('a'.charCodeAt(0));
console.log(String.fromCharCode(97))

const joinString = str +' '+ secondStr;
console.log(joinString);

console.log(strTem);

let strReplace = 'This is an book';

/*
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.endsWith()
String.fromCharCode()
String.fromCodePoint()
String.prototype.match()
String.prototype.matchAll()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.split()
String.prototype.substring()
String.prototype.toLowerCase()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
*/

// case insensitive 
const str = 'PerVez'
const shouldBeTrue = (str.toLowerCase() === 'pervez'.toLowerCase()); // true

// String.matchAll() // To be clarified.