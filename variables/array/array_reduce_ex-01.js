/**
 * Input
 */
const array = [
  {type:"shoe", price:1000, quantity:5, size:['9', '10'], category:'mens'},
  {type:"shoe", price:1000, quantity:5, size:['7', '6'], category:'women'},
  {type:"lipstick", price:5000, quantity:5, size:[], category:'women', colors:['red', 'pink']},
  {type:"pant", price:3000, quantity:5, size:['36', '38'], category:'mens'},
]


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