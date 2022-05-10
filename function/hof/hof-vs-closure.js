// closure as module revealing pattern
const bankAccount = (function(){
  let amount = 0;
  let accountHolderName = 'Pervez Alam'
  function convertToNumber(value) {
    if(isNaN(value)) {
      return 0;
    }
    return value;
  }
  function add(value, interestLogicFn) {
    amount += convertToNumber(value);
    amount = interestLogicFn(amount);
    //amount = amount + value
  }
  function showAmount() {
    console.log('Amount is ', amount, ' of ',  accountHolderName);
  }

  return {
    add,
    showAmount
  }
})();

function giveInterestOnValueAboveThousand(amount) {
  const interest = 5;
  // can access 'interest'
  // can't access 'accountHolderName'
  function calculateInterest(totalAmount) { 
    return totalAmount + ((totalAmount * interest)/100)
  }
  bankAccount.add(amount, calculateInterest);
  bankAccount.showAmount();
}

giveInterestOnValueAboveThousand(1000);
giveInterestOnValueAboveThousand(100);
giveInterestOnValueAboveThousand(1100);