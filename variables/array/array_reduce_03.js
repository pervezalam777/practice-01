// The following is the input data
const drive = [
  { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
  { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
  { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
  { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
  { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
];

/**
 * Need the following output
 * [
 * { id:'d001', type: 'directory',  name: 'study', size: 571530, parent: 'root'},
 * { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
 * ]
 */

const result = drive.reduce((previousResult, currentObject) => {
  if(currentObject.type === 'directory'){
    previousResult.push(currentObject); // pushed referenced object
  } else {
    const parentDirectory = drive.find((value) => value.id === currentObject.parent);
    if(parentDirectory){
      parentDirectory.size += currentObject.size;
    }
  }
  return previousResult;
}, []);

// validation of result output
console.log('result ', result);
console.log('directory name at 0 index', result[0].name === 'study');
console.log('directory name at 1 index', result[1].name === 'pervez');
console.log('directory size at 0 index should be 571530', result[0].size === 571530);
console.log('directory size at 1 index should be 0', result[1].size === 0);

console.log('Is referenced ',result[0] === drive[1])
console.log('has same name ',result[0].name === drive[1].name)