class Calculator {

  add(num1, num2) {
    // 
  }

  minus(num1, num2){

  }

  divide(num1, num2){
    // nmm1/num2
  }

  multiply(num1, num2){
    //
  }

  percentage(amount, percentValue){
    // e.g. amount=10000, percentValue = 10, return value should be 1000

  }
}

function expect(result, expected){
  if(result !== expected){
    console.error(`ERROR: ${result} is not equal to ${expected}`);
    return;
  }
  console.log(`passed: ${result} is equal to ${expected}`)
}

(function main() {
  const calculator = new Calculator();
  let result = calculator.add(10, 20);
  expect(result, 30);

  result = calculator.minus(result, 5);
  expect(result, 25);

  result = calculator.divide(result, 5);
  expect(result, 5);

  result = calculator.multiply(result, 1000);
  expect(result, 5000);

  result = calculator.percentage(result, 10);
  expect(result, 500);

})()