function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} ${userName} !`);
}

greetUser("Hi", "Aldo");
greetUser("Hello");
// Output
// Hi Aldo !
// Hello user !

// Without Rest Parameter
function sumUp1(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp1([1, 2, 3, 4, 5]));
// Output
// 15

// Rest Parameter
function sumpUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumpUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Output
// 55

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
// Unexpected Result

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
// Output
// 55

/*
  High Order Function method:
  reduce, map, filter, forEach.
  each of those method will create a new array with concret value which passed as an argument
*/

// map -> only available take ONE CALLBACK
const names = ["Rhenaldo", "Woody", "Jackson", "Malih"];

const newNameWithExcMark = names.map((name) => {
  return `${name}!`;
});

console.log(...newNameWithExcMark);

// filter -> MUST return FALSY/TRUHTY based condition on callback
const students = [
  {
    name: "Rhenaldo",
    score: 99,
  },
  {
    name: "Johan",
    score: 91,
  },
  {
    name: "Ceb",
    score: 12,
  },
  {
    name: "FBZ",
    score: 10,
  },
  {
    name: "Whitemon",
    score: 20,
  },
];

const eligibleForScholarship = students.filter((student) => student.score > 30);
console.log(eligibleForScholarship);

// find -> Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const lowStudentScore = students.find((student) => student.score < 70);
console.log(lowStudentScore);

const scores = [1, 12, 1313, 1233, 1214, 98, 482342, 774, 99812, 2];
const compareScore = (a, b) => {
  return a - b;
};

const sortingScore = scores.sort(compareScore);
console.log(...sortingScore);

// ForEach (declaration iteration)
names.forEach((name) => {
  console.log(`My name is ${name}`);
});

// reduce
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

// Recursive to countdown
const recursive = (n) => {
  if (n < 1) {
    return [];
  } else {
    const countArray = recursive(n - 1);
    countArray.unshift(n);
    return countArray;
  }
};

console.log(recursive(5));

// Recursive to create a range numbers
const rangeNumbers = (startNum, endNum) => {
  return startNum === endNum
    ? [startNum]
    : rangeNumbers(startNum, endNum - 1).concat(endNum);
};

console.log(rangeNumbers(1, 10));
