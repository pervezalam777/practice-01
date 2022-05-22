function callByReference(personList) { 
  //const newList = [...personList];

  // const newList = JSON.parse(JSON.stringify(personList));
  // newList.forEach(person => {
  //   person.rate = 5
  // })
  const newList = personList.map(person => {
    return {...person, rate: 5}
  })
  return newList;
}

const persons = [
  {
    name: 'pervez',
    loan: 1500000
  },
  {
    name: 'arif',
    loan: 2000000
  },
  {
    name: 'narender',
    loan: 3500000
  },
  {
    name: 'ram',
    loan: 2500000
  }
];
const personNewList = callByReference(persons); 

console.log('persons not updated', persons);
console.log('personNewList', personNewList);
console.log('persons === personNewList are not same', persons === personNewList)
/**
 * All the following are referenced
 * 1. Array inside array [[1],[2]]
 * 2. Object inside array [{a:10}, {b:20}]
 * 3. Array inside object {a:[1,2,3,4]}
 * 4. Object inside object {a: {b: 20}}
 * 
 * 5. nested all object or array are referenced
 * {
 *  a:{
 *    b:{
 *      c:20
 *    }
 *  }
 * }
 */