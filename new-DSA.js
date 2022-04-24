// get minimum numbers
function getMin(numbers) {
  if (!numbers.length) {
    throw new Error("should not an empty number");
  }

  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    // if the numbers based on the current index
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testNumbers = [3, 1, 2, 21, 22, 12, 41];

const min = getMin(testNumbers);

console.log(min); // 1

/*
 -----------------------
 another way to find the minimum numbers

 writing own algorithm sorted list
*/
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error("should not be an empty numbers");
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        // swap
        numbers[i] = outerElement;
        numbers[j] = innerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

const minimumNumbers2 = [-19, 12, 99, 83, -100, 12, 55];
const min2 = getMin2(minimumNumbers2);
console.log(min2); // -19

function isEvenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}

console.log(isEvenOrOdd(10)); // even
console.log(isEvenOrOdd(11)); // odd

function sumUp(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const array = [3, 3, 10];
console.log(sumUp(array));
