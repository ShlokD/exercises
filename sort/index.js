const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while(leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1);
    }
  }

  while(leftArr.length) {
    sortedArr.push(leftArr.shift());
  }

  while(rightArr.length) {
    sortedArr.push(rightArr.shift());
  }

  return sortedArr;
}

const _sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = parseInt(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);
    return merge(_sort(leftArr), _sort(rightArr));
  }
  
  return arr;
};

const sort = arr => {
  const copy = arr.slice(0);
  return _sort(copy, 0, copy.length - 1 );
}

module.exports = sort;