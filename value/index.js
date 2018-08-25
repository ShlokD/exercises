const value = (op) => {
  let returnVal = op;

  while(typeof returnVal === 'function') {
    returnVal = returnVal.call();
  }
  return returnVal;
}

module.exports = value;