import { useState } from 'react';
import { clothsListing } from './constants'
import { paginationWithMultipleArray, getTotalPageCount, paginationWithStartEnd } from './utils';
import PaginationComponent from './components/PaginationComponent';
import ListItemsComponent from './components/ListItemsComponent';
import './App.css';

//const inputArr = [1,3,5,23,45,2,11,66,77,88];
const multipleArray = paginationWithMultipleArray(clothsListing);
function App() {
  const [listItems, updateListItems] = useState([])

  function handlePageChange(pageNo) {
    console.log('page No clicked', pageNo)
    const index = pageNo - 1;
    updateListItems(multipleArray[index])
  }
  return (
    <div className="App">
      <h1>Pagination</h1>
      <PaginationComponent totalPages={multipleArray.length} onPageChange={handlePageChange} />
      <ListItemsComponent items={listItems} />
    </div>
  );
}

export default App;
