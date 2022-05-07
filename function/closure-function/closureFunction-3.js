// closure as module revealing pattern
const Person = (function(){
  let amount = 0;
  function convertToNumber(value) {
    if(isNaN(value)) {
      return 0;
    }
    return value;
  }
  function add(value) {
    amount += convertToNumber(value);
    //amount = amount + value
  }
  function showAmount() {
    console.log('Amount is ', amount);
  }

  return {
    add,
    showAmount
  }
})();


Person.add(10);
Person.add(20);
Person.add('Pervez');
Person.add(30);
Person.showAmount();
