//--- Create/Define function
// Named function
function namedFunction() {
  console.log('named function namedFunction')
};
// or
// anonymous function
const anonymousFunction = function() {
  console.log('anonymous function stored on anonymousFunction variable')
};

// Immediately-invoked function expressions (iife)
(function() {
  console.log('Immediately-invoked function expressions')
})();

// fat arrow function
var fatArrowFunction = () => {
  console.log('fat arrow function stored on fatArrowFunction variable')
};

//--- Call functions
namedFunction();
anonymousFunction();
fatArrowFunction();