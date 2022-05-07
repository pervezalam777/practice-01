// inner function is closure
function main() {
  console.log('main called.')
  function display() { // inner function (closure)
    console.log('display called.')
  }
  display();
}

main();
//display(); // Error: display is not defined