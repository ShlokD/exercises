const once = (func) => {
  let called = false;
  let returnVal = null;
  return function (...args) {
    if (!called) {
      returnVal = func.apply(this, args);
      called = true;
    }
    return returnVal;
  }

}

module.exports = once;