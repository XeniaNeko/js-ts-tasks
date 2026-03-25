/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeoutId = null;
  let shouldCallLeading = true;
  let lastArgs;

  return function (...args) {
    lastArgs = args;

    if (shouldCallLeading) {
      fn(...args);
      shouldCallLeading = false;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      shouldCallLeading = true;
      fn(...lastArgs);
    }, delay);
  };
};

