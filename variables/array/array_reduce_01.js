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
 * { fileCount: 3, directoryCount: 1}
 */

const result = drive.reduce((previousResult, currentObject) => {
  if(currentObject.type === 'file') {
    previousResult.fileCount += 1;
  } else {
    previousResult.directoryCount += 1;
  }
  return previousResult;
}, {fileCount:0, directoryCount:0});

// validation of result output
console.log('result ', result);
console.log('directory count should be 1', result.directoryCount === 2);
console.log('file count should be 3', result.fileCount === 3);