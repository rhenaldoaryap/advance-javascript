/*
    Convert Celsius to Fahrenheit

    Formula:
    to convert celsius to fahrenheit is times 9/5 plus 32
*/
const convertToF = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};

console.log(convertToF(30)); // 86

/*
    Reserver a string.
*/

const reverseString = (str) => {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};

console.log(reverseString("Hello"));

const reverseStringAgain = (str) => {
  return str.splice("").reverse().join("");
};

console.log(reverseString("Hello World"));

/*
    Factorialize a number
*/
const factorialize = (num) => {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
};

console.log(factorialize(5));

/*
    Explanation:
    focus on the loop, we set the i equal to two, and index less than equal to num (argument)
    if it pass add by 1 until reach the argument.

    So, the calculation will be
    5 * 4 * 3 * 2
    Why stop at 2?
    because we set the i at the loop by 2 (less than equal to two).
    and the result is 120.

    Actually, we calculate 5 * 4 * 3 * 2 * 1
    but where the 1 it come from?
    see at the line 38, we set the product variable to 1

    what if we change the product variable to 2? (line 38)
    obviously the result will change, the result will be 240
    but why it can be 240?
    the calculate will be
    5 * 4 * 3 * 2 * 2
*/
