import { useState } from 'react';
import { clothsListing } from '../constants'
import { paginationWithMultipleArray } from '../utils';
import PaginationComponent from './PaginationComponent';
import ListItemsComponent from './ListItemsComponent';

const multipleArray = paginationWithMultipleArray(clothsListing);
function ApproachOneComponent() {
  const [listItems, updateListItems] = useState([])

  function handlePageChange(pageNo) {
    console.log('page No clicked', pageNo)
    const index = pageNo - 1;
    updateListItems(multipleArray[index])
  }
  return (
    <div>
      <h1>Pagination: Approach one</h1>
      <PaginationComponent totalPages={multipleArray.length} onPageChange={handlePageChange} />
      <ListItemsComponent items={listItems} />
    </div>
  );
}

export default ApproachOneComponent;