// Inner function is closure
// Closure function can access
// -- its own variable, function, parameters
// -- its parent variable, function, parameters
// -- global variables
const globalVar = 'I am global'
function main(parentParameter) {
  const parentVar = 'I am parent variable'
  setTimeout((ownParam) => {
    const ownVar = 'I am the closure variable'
    console.log('globalVar:', globalVar)
    console.log('parentParameter:', parentParameter);
    console.log('parentVar:', parentVar);
    console.log('ownParam:', ownParam);
    console.log('ownVar:', ownVar);
  }, 3000, 'own parameter');
}
main('Parent parameter');