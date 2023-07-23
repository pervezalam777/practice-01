/**
 * Input
 */
const array = [
  {type:"shoe", price:1000, quantity:5, size:['9', '10'], category:'mens'},
  {type:"shoe", price:1000, quantity:5, size:['7', '6'], category:'women'},
  {type:"lipstick", price:5000, quantity:5, size:[], category:'women', colors:['red', 'pink']},
  {type:"pant", price:3000, quantity:5, size:['36', '38'], category:'mens'},
]

const array2 = [
  {type:"shoe", price:1000, quantity:5, size:['9', '10'], category:'mens'},
  {type:"shoe", price:1000, quantity:5, size:['7', '6'], category:'women'},
  {type:"lipstick", price:5000, quantity:5, size:[], category:'women', colors:['red', 'pink']},
  {type:"pant", price:3000, quantity:5, size:['36', '38'], category:'mens'},
]

const result = array.reduce((preResult, currentObject) => {
  //preResult[currentObject.category].push(currentObject);
  if(currentObject.category === 'mens'){
    preResult.mens.push(currentObject);
  } else {
    preResult.women.push(currentObject);
  }
  return preResult; // must
}, { mens:[], women: []})

//console.log(result);

Array.prototype.myReduce = function(callbackFn, initialValue) {
  let output = initialValue;
  const len = this.length; // this means array which its referring to.
  for (let index = 0; index < len; index++) {
    const element = this[index];
    output = callbackFn(output, element)
  }
  return output;
}

const myResult = array2.myReduce((preResult, currentObject) => {
  //preResult[currentObject.category].push(currentObject);
  if(currentObject.category === 'mens'){
    preResult.mens.push(currentObject);
  } else {
    preResult.women.push(currentObject);
  }
  return preResult; // must
}, { mens:[], women: []});

console.log('my result: ',myResult);
/**
 * output one:
 * 
 * {
 *  mens: [
 *    {type:"shoe", price:1000, quantity:5, size:['9', '10'], category:'mens'},
 *    {type:"pant", price:3000, quantity:5, size:['36', '38'], category:'mens'},
 *  ],
 *  women: [
 *    {type:"shoe", price:1000, quantity:5, size:['7', '6'], category:'women'},
 *    {type:"lipstick", price:5000, quantity:5, size:[], category:'women', colors:['red', 'pink']},
 *  ]
 * }
 */

/**
 * output two
 * {
 *    "shoe": [
 *      {type:"shoe", price:1000, quantity:5, size:['9', '10'], category:'mens'},
 *      {type:"shoe", price:1000, quantity:5, size:['7', '6'], category:'women'},
 *    ],
 *    "lipstick": [
 *      {type:"lipstick", price:5000, quantity:5, size:[], category:'women', colors:['red', 'pink']},
 *    ],
 *    "pant": [
 *      {type:"pant", price:3000, quantity:5, size:['36', '38'], category:'mens'},
 *    ]
 * }
 */