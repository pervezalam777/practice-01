// create a greetToWithMessage function with two parameter
// first parameter should take name as string as required parameter
// second parameter should take message as string which will be optional 
// default value for second parameter should be "hello!!"
function greetToWithMessage(name, message = 'Hello!!') {
  console.log(`${message}, ${name}`);
}

// Call greetToWithMessage function with one argument
// argument should be a name of person
greetToWithMessage('Ram');

// Call greetToWithMessage function with two arguments
// first argument should be a name of person
// second argument should be greeting message
greetToWithMessage('Arif', 'Good morning');