// palindrome

function isPalindromeFinal(input){
  const output = input.toLowerCase().split('').reverse().join('');
  return input.toLowerCase() == output;
}

function isPalindrome(input){
  let result = input.split('');
  console.log('after split', result);
  result = result.reverse();
  console.log('after reverse', result)
  result = result.join('');
  console.log('after re join', result);

  console.log('is Result equal to input', (input == result));
}

isPalindrome('nitin');
console.log('------------------------------')
isPalindrome('pervez');
console.log('------------------------------');
console.log('Is nitin a palindrome', isPalindromeFinal('Nitin'))