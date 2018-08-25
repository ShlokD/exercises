const flatten = arr => {
  return arr.reduce((flatArr, currArr) => {
    return flatArr.concat(Array.isArray(currArr) ? flatten(currArr) : currArr);
  }, [])
}

module.exports = flatten;