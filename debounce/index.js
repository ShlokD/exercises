const debounce = (func, wait) => {
  let isDebounce;
  return function (...args) {
    const ctx = this;
    clearTimeout(isDebounce);
    isDebounce = setTimeout(() => func.apply(ctx, args), wait);
  }

}
module.exports = debounce;