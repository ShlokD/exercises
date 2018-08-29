const search = (arr, elem) => {
  const length = arr.length;
  if (length === 0) { return -1 }

  const _search = (start, end) => {
    if (start === end && arr[start] !== elem) {
      return -1
    }

    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > elem) {
      return _search(0, mid);
    } else if (arr[mid] < elem) {
      return _search(mid + 1, length)
    } else {
      return mid;
    }
  }

  return _search(0, length);

}


module.exports = search;