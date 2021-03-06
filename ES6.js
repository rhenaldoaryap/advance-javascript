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
console.log(moreParameters([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

/*
  ES6 introduce the default value
*/
const increment = (number, value = 1) => number + value;

console.log(increment(5)); // 6

/*
  Rest Parameter with arrow function
*/
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(5, 10)); // 15

/*
  Destructuring Assingment
  For Array, the order is matters
  But, for Object, the only matters is the key
*/

/*
  Destructuring for Objects
*/

const HIGH_TEMPERATURES = {
  yesterday: 77,
  today: 78,
  tomorrow: 79,
};

const { today } = HIGH_TEMPERATURES;

console.log(today); // 78

/*
  Assign variables from nested Objects
*/
const LOCAL_FOREST = {
  yesterday: { low: 77, high: 80 },
  today: { low: 75, high: 81 },
  tomorrow: { low: 77, high: 79 },
};

const {
  today: { low: todayLow },
} = LOCAL_FOREST;
const {
  tomorrow: { high: highTomorrow },
} = LOCAL_FOREST;

console.log(todayLow); // 75

/*
  Destructuring for Array
  Remember, when destructuring an Array, the orders is matters
*/
let a = 8,
  b = 6;

[a, b] = [b, a];

console.log(a, b); // 6 8

/*
  Destructuring combine with Rest Parameter to reassign array elements
*/
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeFirstTwoArray = (list) => {
  const [a, b, ...arr] = list;
  return arr;
};

const arr = removeFirstTwoArray(source);
console.log(...arr); // 3 4 5 6 7 8 9 10 (because we using spread operator to taking out all values from objects/array)

/*
  Writing object literals using object property shorthand
*/

/*
  Before using shorthand for creating object literals

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

console.log(createPerson("Rhenaldo", 23, "Male"));
*/

/*
  With shorthand for avoiding the redudant (or called synctatic sugar)
*/

const createPerson = (name, age, gender) => {
  return { name, age, gender };
};

console.log(createPerson("Rhenaldo", 23, "Male"));

/*
  Write concise (ringkas) declarative functions with ES6
  Before that, we already known to create a method inside an object with ES5 like code below:
*/

const person = {
  name: "Rhenaldo",
  sayHello: function () {
    return `Hello ${this.name}`;
  },
};

console.log(person.sayHello());

/*
  create a method with ES6
*/

const personAgain = {
  name: "Arya",
  sayHello() {
    return `Hello, ${this.name}`;
  },
};

console.log(personAgain.sayHello());

/*
  .then()
  .catch()
  method only available if we are not inside of a function
  if we do so, we have to use async-await to handle the asynchronous
*/
const makeServerRequest = new Promise((resolve, reject) => {
  // let serverRequest = true;
  let serverRequest = false;

  serverRequest ? resolve("We got the data") : reject("data not received");
});

makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
