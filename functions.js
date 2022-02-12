function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} ${userName} !`);
}

greetUser("Hi", "Aldo");
greetUser("Hello");

// Without Rest Parameter
function sumUp1(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp1([1, 2, 3, 4, 5]));

// Rest Parameter
function sumpUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumpUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Rest Parameter without Spread Operator
function sumExm(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbersExm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumExm(inputNumbersExm));

// Output -> 01, 2, 3, 4, 5, 6, 7, 8, 9, 10

// RestParameter and Spread Operator
function sumpUp2(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumpUp2(...inputNumbers));
