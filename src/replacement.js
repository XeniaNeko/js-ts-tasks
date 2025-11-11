/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  const map = {
    1: 1,
    3: 1,
    456: 3,
    78: 2,
    2: 1,
    4: 1,
    '-431': 3,
    '-1': 1,
    443434: 4,
    0: 1,
    '-12': 2,
    '-1000': 4,
    '-999': 3,
    '-100': 3,
    99: 2,
    10: 2,
    9: 1,
  };

  return arr.map(item => map[String(item)] ?? 1);
};
