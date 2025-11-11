/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxElement = arr[0];
  let maxLength = 1;
  
  let currentElement = arr[0];
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      currentLength++;
    } else {
      currentElement = arr[i];
      currentLength = 1;
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxElement = currentElement;
    }
  }

  return Array(maxLength).fill(maxElement);
};
