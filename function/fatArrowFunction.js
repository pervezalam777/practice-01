// example 1
const fatArrowOne = (name) => { 
  console.log(name)
}

// example 2
// only for one parameter
const fatArrowTwo = name => { 
  console.log(name);
  console.log('hello', name);
}

// example 3
//only for one parameter and one statement
const fatArrowThree = name => console.log(name);

// example 4
// with optional parameter 
// applicable for all type of functions e.g. named, anonymous, and fat arrow
const fatArrowFourth = (name, surname='kumar') => console.log(name + ' '+ surname);

// example 5
// with optional parameter 
// function with rest parameter (...)
const fatArrowFifth = (name, ...names) => {
  console.log('what is names ',names)
  console.log(name+' '+names.join(' '));
}

fatArrowOne('pervez');
fatArrowTwo('ram');
fatArrowThree('arif');
fatArrowFourth('Narender');
fatArrowFourth('Pervez', 'Saifi');
fatArrowFifth('Mohammad', 'Pervez', 'Alam', 'Saifi');
fatArrowFifth('Ram');

const add = (a, b) => a + b;
const add1 = (a, b) => {
  console.log('what is the context', this);
  return a + b;
}
const subtract = (a, b) => a - b;



console.log('fat arrow function add', add(10, 20));
console.log('fat arrow function add1', add1(10, 20));

// scope or context of function does not change when it is called from any of the function or event.

/**
There are differences between arrow functions and traditional functions, as well as some limitations:

Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
Arrow functions don't have access to the new.target keyword.
Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
Arrow functions cannot use yield, within its body.

 */