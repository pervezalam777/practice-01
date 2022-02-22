const person = [
  {
    name:'Ram',
    email:'ram@gmail.com',
    phone:9899743623,
    gender: 'male'
  },
  {
    name:'vijaya',
    email:'vijaya@gmail.com',
    phone:9899743621,
    gender: 'female'
  },
  {
    name:'Narender',
    email:'narender@gmail.com',
    phone:9899745623,
    gender: 'male'
  },
  {
    name:'Arif',
    email:'arif@gmail.com',
    phone:9899943623,
    gender: 'male'
  },
  {
    name:'Pervez',
    email:'pervez@gmail.com',
    phone:9899748623,
    gender: 'male'
  },
  {
    name:'Hema',
    email:'hema@gmail.com',
    phone:9899713623,
    gender: 'female'
  },
  {
    name:'imrana',
    email:'imrana@gmail.com',
    phone:9899743623,
    gender: 'female'
  },
  {
    name:'Arti',
    email:'Arti@gmail.com',
    phone:9899743633,
    gender: 'female'
  },
  {
    name:'Pooja',
    email:'Pooja@gmail.com',
    phone:9899743693,
    gender: 'female'
  },
  {
    name:'kanu',
    email:'kanu@gmail.com',
    phone:9892743623,
    gender: 'female'
  }
]

const femaleList = person.filter(p => p.gender === 'female');
const maleList = person.filter(p => p.gender === 'male');
console.log('Female count in the list ', femaleList.length);
console.log('Male count in the list ', maleList.length);

const arrangeMaleFirst = maleList.concat(femaleList);
console.log('Male should come first', JSON.stringify(arrangeMaleFirst));

let pairPersons = [];
let index = 0
while(index < maleList.length) {
  const pair = [maleList[index].name, femaleList[index].name];
  pairPersons.push(pair);
  index++
}
while(index < femaleList.length) {
  const pair = [femaleList[index].name, femaleList[index+1].name];
  pairPersons.push(pair);
  index += 2;
}

console.log('Pairs list', pairPersons)
