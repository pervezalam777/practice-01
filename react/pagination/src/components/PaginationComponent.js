import { useState, useEffect } from 'react';

function PaginationComponent(props) {
  const { totalPages, onPageChange } = props;
  const [currentPage, updateCurrentPage] = useState(1);
  
  useEffect(() => {
    onPageChange(currentPage);
  },[]);

  function handlePageNoClick(e) {
    const pageNo = Number(e.target.id);
    onPageChange(pageNo);
    updateCurrentPage(pageNo)
  }
  
  function renderPaginationButtons() {
    const arrPaginationButtons = [];
    for (let pageNo = 1; pageNo <= totalPages; pageNo++) {
      arrPaginationButtons.push(
        <button 
          key={pageNo}
          id={pageNo}
          onClick={handlePageNoClick}
          disabled={pageNo === currentPage}
        >
          {pageNo}
        </button>
      )
    }
    return arrPaginationButtons;
  }

  return (
    <div>
      {renderPaginationButtons()}
    </div>
  )
}

export default PaginationComponent;