const throttle = (func, wait) => {
  let timer = null;

  const later = (...args) => {
      func.apply(this, args)
      timer = null;
  };

  return function() {
    if(!timer) {
      timer = setTimeout(later, wait);
    } else {
      return;
    }
  }
}

module.exports = throttle;