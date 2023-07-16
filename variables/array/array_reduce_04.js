// The following is the input data
const drive = [
  { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
  { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
  { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
  { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
  { id:'f004', type: 'file', name: 'test.txt', size: 33333, parent: 'd002'},
  { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
];

/**
 * Need the following output
 * [
 * { id:'d001', type: 'directory',  name: 'study', size: 571530, parent: 'root'},
 * { id:'d002', type: 'directory', name: 'pervez', size: 33333, parent: 'root'}
 * ]
 */

const filesAndDirectories = drive
  .reduce((previousResult, currentObject) => {
    if(currentObject.type === 'file'){
      previousResult.files.push(currentObject);
    } else {
      previousResult.directories.push({...currentObject}); // shallow cloning
    }
    return previousResult;
  }, {directories:[], files:[]})

const directoriesWithSize = filesAndDirectories.files.reduce((previousResult, currentObject) => {
  const directory = previousResult.find(v => v.id === currentObject.parent);
  if(directory) {
    directory.size += currentObject.size;
  }
  return previousResult;
}, filesAndDirectories.directories)
// validation of result output
console.log('result ', directoriesWithSize);
console.log('directory name at 0 index', directoriesWithSize[0].name === 'study');
console.log('directory name at 1 index', directoriesWithSize[1].name === 'pervez');
console.log('directory size at 0 index should be 571530', directoriesWithSize[0].size === 571530);
console.log('directory size at 1 index should be 33333', directoriesWithSize[1].size === 33333);

console.log('Is referenced',directoriesWithSize[0] === drive[1]);
console.log('has same name',directoriesWithSize[0].name === drive[1].name);