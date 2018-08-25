function myMap (arr, transform, ctx = this) {
  const returnArr = [];
  arr.forEach((elem, index) => {
    returnArr.push(transform.call(ctx, elem, index, arr));
  });

  return returnArr;
}

module.exports = myMap;