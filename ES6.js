const freezeObj = () => {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  /*
    Preventing const changing with using freeze function
  */
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (error) {
    console.log(error);
  }

  return MATH_CONSTANTS.PI;
};

const PI = freezeObj();
console.log(PI);

/*
  Using arrow function to more readable and shortcut line
*/
const date = () => new Date();

console.log(date().toDateString());

// OR
const date1 = () => {
  return new Date();
};

console.log(date1().toDateString());

/*
  Arrow function with one or more parameters
*/
const oneParameter = () => "value";

const moreParameters = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(oneParameter());
console.log(moreParameters([1, 2], [3, 4, 5]));
