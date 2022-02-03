// Object.assign()
const person = { name: "Pervez alam", age:38, address: "delhi", languageSpeak:['hindi', 'english', 'urdu']};
const husband = { wifeName: 'Amreen'}
const sseEmployee = { salary: '13L', experience: 10, name:"Pervez ali"};

console.log('sse employee before merge', sseEmployee);

Object.assign(sseEmployee, person, husband);

console.log('final sse employee details after merge', sseEmployee);

