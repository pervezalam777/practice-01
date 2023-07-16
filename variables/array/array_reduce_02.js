// The following is the input data
let drive = [
  { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
  { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
  { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
  { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
  { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
];

/**
 * Need the following output
 * total size occupied in drive -> 573513
 */

const result = drive.reduce((previousResult, currentObject) => {
  previousResult += currentObject.size;
  return previousResult;
}, 0);

// validation of result output
console.log('result ', result);
console.log('total size occupied in drive -> 573513', result === 573513);
