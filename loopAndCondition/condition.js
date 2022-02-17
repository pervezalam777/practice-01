// if, if else, if elseif else
// ternary operation -> ? :
// switch (case)

if(true){
  console.log('condition matched')
}

const name = 'Pervez';
if(name === 'Pervez') {
  console.log('User name is Pervez')
}

if(name === 'Arif'){
  console.log('User name is Arif')
} else {
  console.log('User name is something else');
}

if(name === 'Arif'){
  console.log('User name is Arif')
} else if(name === 'Pervez') {
  console.log('User is is found in else if condition and name is Pervez')
} else {
  console.log('no match')
}

// ternary operation -> ? :
//(condition) ? true : false
name === 'Pervez' ? console.log('Yes name is Pervez') : console.log('No name is not Pervez');
name === 'Arif' ? console.log('Yes name is Arif') : console.log('No name is not Arif');
// //(condition) ? //(condition) ? true : false : false;

// switch (case) always check value and type
switch(10) {
  case '10':
    console.log('Value match with "10"')
    break;
  case 10:
    console.log('Value match with 10');
    break;
  default:
    console.log('value did not matched')
}

switch(20) {
  case '20':
    console.log('Value match with "20"')
    break;
  case 20:
    console.log('Value match with 20');
  default:
    console.log('value did not matched or matched but not stopped')
}


switch(50) {
  case '20':
  case 20:
    console.log('Value match with 20')
    break;
  case 30:
  case 50:
    console.log('Value match with 30 or 50')
    break;
  default:
    console.log('no match')
}