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

function printDataSources() {
  //TODO: reduce...
  console.log('--------Start-ds--------')
  const strList = dataSources.reduce((res, curr) => {
    res += curr.code + ', '
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

const ds = {code:'ds001', text:'Soil grid', isDownloadable: true, size: 204082133};
addNewDataSource(ds);
addNewDataSource({...ds, code:'ds002', text: 'Soil grid 2015'}, false)
addNewDataSource({...ds, code:'ds003', text: 'Soil grid 2016'}, true)
printDataSources();

removeFirstDataSource();
printDataSources();

removeLastDataSource();
printDataSources();

addNewDataSource({...ds, code:'ds002', text: 'Soil grid 2015'}, false)
addNewDataSource({...ds, code:'ds003', text: 'Soil grid 2016'}, true)
addNewDataSource({...ds, code:'ds004', text: 'Soil grid 2017'})
addNewDataSource({...ds, code:'ds005', text: 'Soil grid 2018'})

printDataSources();
getListFrom(1, 3);

printDataSources();

getListFromAndRemove(1, 1);
printDataSources();

replaceWithNewDataSource(1, {...ds, code:'ds009', text:'Soil grid 2019'});
printDataSources();
printFull();