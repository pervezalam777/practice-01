 /**
  [
    [1,3,5],
    [23,45,2],
    [11,66,77],
    [88]
  ]
*/
export function paginationWithMultipleArray(inputArr) {
  const outputArr = []
  let innerArrayIndex = 0;
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    let innerArr = outputArr[innerArrayIndex] || [];
    outputArr[innerArrayIndex] = innerArr;
    if(innerArr.length < 3) {
      innerArr.push(element);
    } else {
      innerArrayIndex ++;
      innerArr = outputArr[innerArrayIndex] || [];
      outputArr[innerArrayIndex] = innerArr;
      innerArr.push(element);
    }
  }
  return outputArr;
}

export function getTotalPageCount(arr, itemsPerPage) {
  let totalCount = parseInt(arr.length / itemsPerPage);
  if(arr.length % itemsPerPage > 0) {
    totalCount++;
  }
  return totalCount
}

export function paginationWithStartEnd(arr, pageNo, itemsPerPage) {
  /*
    pageNo - 1: 1 * 3 = end = 3
    pageNo - 1: (1-1)*3 = start = 0

    pageNo - 2: 2 * 3 = end = 6
    pageNo - 2: (2-1)*3 = start = 3

    pageNo - 3: 3 * 3 = end = 9
    pageNo - 3: (3-1)*3 = start = 6
  */
  const start = (pageNo -1) * itemsPerPage;
  let end = pageNo * itemsPerPage;
  end = end < arr.length ? end : arr.length;
  const arrNew = []
  for (let index = start; index < end; index++) {
    const element = arr[index];
    arrNew.push(element)
  }
  return arrNew;
  
}