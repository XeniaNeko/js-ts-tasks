/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let minSalary = firstSalary;
  let maxSalary = firstSalary;

  if (secondSalary > maxSalary) maxSalary = secondSalary;
  if (thirdSalary > maxSalary) maxSalary = thirdSalary;

  if (secondSalary < minSalary) minSalary = secondSalary;
  if (thirdSalary < minSalary) minSalary = thirdSalary;

  return maxSalary - minSalary;
};
