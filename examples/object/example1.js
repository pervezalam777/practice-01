const person = {
  firstName: 'perVeZ',
  lastName: 'alam'
}

function getFullName(person){
  let firstName = person.firstName;
  firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
  return `${firstName} ${person.lastName}`
}

console.log('User full name is', getFullName(person));
