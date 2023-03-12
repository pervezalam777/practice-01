import { useState } from 'react';
import { clothsListing } from '../constants'
import { getTotalPageCount, paginationWithStartEnd } from '../utils';
import PaginationComponent from './PaginationComponent';
import ListItemsComponent from './ListItemsComponent';

const itemsPerPage = 3;
function ApproachTwoComponent() {
  const [listItems, updateListItems] = useState([])

  function handlePageChange(pageNo) {
    console.log('page No clicked', pageNo)
    const list = paginationWithStartEnd(clothsListing, pageNo, itemsPerPage)
    updateListItems(list)
  }
  return (
    <div>
      <h1>Pagination: Approach one</h1>
      <PaginationComponent totalPages={getTotalPageCount(clothsListing, itemsPerPage)} onPageChange={handlePageChange} />
      <ListItemsComponent items={listItems} />
    </div>
  );
}

export default ApproachTwoComponent;