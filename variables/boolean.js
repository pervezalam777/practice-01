const isTrue = true;
const isFalse = false;
const considerTrue = 011;
const considerFalse = 0;
const undefinedConsiderAsFalse = undefined;
const nullConsiderAsFalse = null;

if(isTrue) {
  console.log('boolean value "true" is true')
}
if(isFalse){} else {
  console.log('boolean value "false" is false')
}
if(considerTrue) {
  console.log('number greater than 0 consider as true', considerTrue)
}
if(considerFalse){} else {
  console.log('0 consider as false')
}
if(undefinedConsiderAsFalse) {} else {
  console.log('undefined consider as false..')
}
if(nullConsiderAsFalse) {} else {
  console.log('null consider as false..')
}