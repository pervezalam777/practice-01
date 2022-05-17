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

const interestRateMap = [
  {
    rate:5,
    min: 0,
    max: 5000
  },
  {
    rate: 6,
    min: 5001,
    max: 10000
  },
  {
    rate: 7,
    min: 10001,
    max: 99999
  },
  {
    rate: 8,
    min: 100000,
    max: Number.MAX_VALUE
  }
];

function calculateInterest(totalAmount) { 
  let rateOfInterest = 0;
  for(let item of interestRateMap) {
    if(totalAmount >= item.min && totalAmount <= item.max){
      rateOfInterest = item.rate;
      break;
    }
  }
  return totalAmount + ((totalAmount * rateOfInterest)/100)
}

function giveInterestOnValueAboveThousand(amount) {
  bankAccount.add(amount, calculateInterest);
  bankAccount.showAmount();
}

giveInterestOnValueAboveThousand(1000); // 1050
giveInterestOnValueAboveThousand(3000); // 4252.5 
giveInterestOnValueAboveThousand(6000); // 10970.175
giveInterestOnValueAboveThousand(12000); // 24578.08725
giveInterestOnValueAboveThousand(75421.91275); // 108000
