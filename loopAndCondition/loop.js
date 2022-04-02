// for, for in, for of, while, do while
// continue and break;
//for(initialize ; condition ; increment)
// i++ -> i = i + 1;
for(let i = 0; i < 10; i++){
  console.log('i value', i, i*2);
}

const array = ['Raj', 'Arif', 'Ram', 'Pervez', 'Narender']
for (let index = array.length - 1; index >= 0 ; index--) {
  const element = array[index];
  console.log('Name is :', element)
}

const colors = { RED:'#FF0000', GREEN:'#00FF00', BLUE: '#0000FF', WHITE:'#FFFFFF'}
for(let colorKey in colors){
  console.log("Color key is ", colorKey, "color value is", colors[colorKey])
}

for(let name of array) {
  console.log('Name is', name);
}

// while(condition) { }
let whileIndex = 0;
while(whileIndex < 10) {
  whileIndex++;
  console.log('while index now ', whileIndex);
}

let doWhileIndex = 10;
do {
  console.log('Do while index', doWhileIndex)
} while(doWhileIndex < 10)

let doWhileIndex1 = 1
do {
  console.log('Do while index second', doWhileIndex1)
  doWhileIndex1++;
} while(doWhileIndex1 < 10)


const nameArray = ['Raj', 'Arif', 'Ram', 'Pervez', 'Narender', 'Vijay'];
for (let index = 0; index < nameArray.length; index++) {
  const name = nameArray[index];
  if(name === 'Narender') {
    break;
  }
  if(name === 'Pervez') {
    continue;
  }
  console.log('Name of persons', name);
}
