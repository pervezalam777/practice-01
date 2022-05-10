function sampleHof(inputFn) {
  let greeting = 'Hello!!';
  //greeting = greeting + inputFn();
  greeting += inputFn();
  return greeting;
}

const nameFunction = () => {
  return 'Pervez'
}
const result = sampleHof(nameFunction);
console.log('result ->', result);

const resultOne = sampleHof(() => {
  return ' Ram, Arif, and Narender';
})
console.log('resultOne ->', resultOne);
/**
sampleHof(() => {
  return 'Pervez'
})

*/