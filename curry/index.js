const curry = (func) => {
  const arity = func.length;
  const curried = (...args) => {
    return args.length < arity 
    ? curried.bind(null, ...args)
    : func.apply(null, args);
  }
  return curried;
}

module.exports = curry;

