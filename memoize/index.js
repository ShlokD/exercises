
const memoize = (op) => {
  const cache = {};

  return function(...args) {
    if(!cache[args]) {
      cache[args] = op.apply(this, args);
    }
    return cache[args];
  }
};

module.exports = memoize;