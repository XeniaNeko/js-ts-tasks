/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  //n = Number(n);

  // if (n < 0 || n > 1000000) {
  //   throw new Error('Number must be between 0 and 1,000,000');
  // }

  let sum = 0;
  for (const digit of String(n)) {
    if (isNaN(Number(digit))) {
      continue;
    }
    sum += Number(digit);
  }

  return sum;
};
