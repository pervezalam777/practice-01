const dataSources = [];

function addNewDataSource(dataSource, inTheEnd = true) {
  if(inTheEnd) {
    dataSources.push(dataSource)
  } else {
    dataSources.unshift(dataSource);
  }
}

function printFull() {
  console.log('--------Start-ds--------')
  console.log(JSON.stringify(dataSources));
  console.log('--------End-ds--------')
}

function printDataSources(key) {
  //TODO: reduce...
  console.log('--------Start-ds--------')
  const strList = dataSources.reduce((res, curr) => {
    res += curr[key] + ', '
    return res;
  }, '')
  console.log(strList)
  console.log('--------End-ds--------')
}

function removeFirstDataSource() {
  const removedDs = dataSources.shift();
  console.log('removed ---', removedDs.code);
}

function removeLastDataSource() {
  const removedDs = dataSources.pop();
  console.log('removed ---', removedDs.code);
}

function getListFrom(startIndex, endIndex) {
  const list = dataSources.slice(startIndex, endIndex);
  console.log('extracted list --slice---', JSON.stringify(list));
  return list;
}

function getListFromAndRemove(startIndex, count) {
  const list = dataSources.splice(startIndex, count);
  console.log('extracted list --splice---', JSON.stringify(list));
}

function replaceWithNewDataSource(startIndex, ds){
  const list = dataSources.splice(startIndex, 1, ds);
  console.log('replaceWithNewDataSource| extracted list --splice---', JSON.stringify(list));
}

function sortOnTextDate() {
  dataSources.sort((dsOne, dsTwo) => {
    const dsOneTextDate = Number(dsOne.text.split(' ')[2]); //['Soil', 'grid', '2015']
    const dsTwoTextDate = Number(dsTwo.text.split(' ')[2]);
    // if(dsOneTextDate > dsTwoTextDate) {
    //   return 1;
    // } else if(dsOneTextDate < dsTwoTextDate){
    //   return -1;
    // } else {
    //   return 0
    // }
    return dsOneTextDate - dsTwoTextDate;
  })
}

const ds = {code:'ds001', text:'Soil grid 2014', isDownloadable: true, size: 204082133};
addNewDataSource(ds);
addNewDataSource({...ds, code:'ds002', text: 'Soil grid 2015'}, false)
addNewDataSource({...ds, code:'ds003', text: 'Soil grid 2016'}, true)
addNewDataSource({...ds, code:'ds004', text: 'Soil grid 2017'})
addNewDataSource({...ds, code:'ds005', text: 'Soil grid 2018'}, false)

printDataSources('text');

sortOnTextDate();
printDataSources('text');