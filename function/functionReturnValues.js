// Create a function which takes two parameters
// first parameter should be a number
// second parameter should be a number
// and should return multiplication of two parameters;
function calculateProduct(inputOne, inputTwo) {
  return inputOne * inputTwo;
}

// call calculateProduct function with two arguments
// both the argument should be number
const output = calculateProduct(10, 5);
console.log('output is ', output);

// After return statement in function it stops further execution.
/**
 * Stops And Return Person Details When ConditionMet
 * @param {String} name : Name of person
 * @param {Array<object>} list : list of persons
 * @returns {object} : person object otherwise null
 */
function stopsAndReturnPersonDetailsWhenConditionMet(name, list) {
  const len = list.length;
  for (let index = 0; index < len; index++) {
    const personDetail = list[index];
    console.log('index looked up', index);
    if(personDetail.name === name){
      return personDetail;
    }
  }
  return null;
}

const list = [
  {name:'pervez', languages:['hindi', 'english', 'urdu']},
  {name:'arif', languages:['hindi', 'english', 'urdu']},
  {name:'ram', languages:['hindi', 'english', 'sanskrit']},
  {name:'narender', languages:['hindi', 'english', 'sanskrit']}
];

let personDetails = stopsAndReturnPersonDetailsWhenConditionMet('pervez', list);
console.log(personDetails);