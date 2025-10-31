/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  // Проверяем, что оба — валидные числа
  // if (isNaN(firstNumber) || isNaN(secondNumber)) {
  //   return NaN;
  // };

  // if typeof firstNumber

  // let num1_str = String(firstNumber).replaceAll(" ", "");
  // let num2_str = String(secondNumber).replaceAll(" ", "");

  // Number("    -5   ".replaceAll(" ", "")) +
  //   Number("   -    10".replaceAll(" ", ""))

  //  // Проверяем, что оба — валидные числа
  // if (isNaN(firstNumber) || isNaN(secondNumber)) {
  //   return NaN;
  // }

  // const num1_str = String(firstNumber).replace(/\s+/g, '');//.replaceAll(" ", "");
  // const num2_str = String(secondNumber).replace(/\s+/g, '');//.replaceAll(" ", "");
  // console.log(num1_str);

  // const num1 = Number(num1_str);
  // const num2 = Number(num2_str);

  // // const num1 = Number(firstNumber.replaceAll(` `,``));
  // // const num2 = Number(secondNumber.replaceAll(` `,``));

  // // Проверяем, что оба — валидные числа
  // if (isNaN(num1) || isNaN(num2)) {
  //   return NaN;
  // }

  //  return num1 + num2;
  // return Number(firstNumber.replaceAll(" ", "")) + Number(secondNumber.replaceAll(" ", ""))

  return Number(String(firstNumber).replaceAll(' ', '')) + Number(String(secondNumber).replaceAll(' ', ''));
};
