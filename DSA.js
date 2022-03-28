/*
    Remove items in middle of array or remove more than elements at once.

    You can use the .splice() method.
    You can say like "remove any number of consecutive elements from anywhere in an array".

    .splice() method can take up to 3 parameters, but for now, we will focus on just the first 2.
    the first parameter of .splice() method are intergers which reprensent indexes or position.
    the second parameter indicate the number of elements to delete.

    Just like another method in DSA, like .push() .unshift() .shift() .pop()
    .splice() method also RETURNS A NEW ARRAY containing the value of removed elements.
*/

const myArray = (arr) => {
  let spliceMethod = arr.splice(2, 2);
  return spliceMethod;
};

console.log(myArray(["I", "am", "really", "happy", "teaching", "coding"]));

let anotherArray = ["I", "am", "really", "happy", "teaching", "coding"];

anotherArray.splice(2, 2);

/*
    The third parameter can be useful when you want to add new element to array.
    Slightly differ if you using push/unshift to add a new element to array.
    When you use third parameter, comprised (terdiri) of one or more element(s)
*/

const numbers = [10, 11, 12, 12, 15];
const startRemoveIndex = 3;
const amountToDelete = 1;
const usingThirdParameterSplice = numbers.splice(
  startRemoveIndex,
  amountToDelete,
  13,
  14
);
console.log(numbers);

/*
    Result:
    [10, 11, 12, 13, 14, 15];
*/

/*
    Slice method.
    Slice method is use for copying a value of an array.
    Slice method can only take two parameters:
    1. first parameter is the index at which to begin extraction.
    2. second parameter is the index at which stop extraction.

    confusing?
    see this example:

    arr.slice(1, 4);
    that slice method will returning substring consisting of index [1, 2, 3]
    BUT for arr[4] is not included.
*/

let weatherConditons = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditons.slice(1, 3);
console.log(todaysWeather);

/*
    result:
    ["snow", "sleet"]

    to read that code, you could be like:
    "slice method, please copying the first index of the array and stop extracting
    at the third item in that array"
*/

/*
    Another example about slice method
*/
const forecast = (arr) => {
  return arr.slice(2, 4);
};

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstroms"])
);

/*
    result:
    ["warm", "sunny"]
*/

/*
    The simplest way to copying a value of an array with using Spead Operator.

    You already know how to use Spread Operator.
    Basically, Spread Operator will taking out the value or copying the value want to copy.
*/

const copyMachine = (arr, num) => {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
};

console.log(copyMachine(["true", "false", "true"], 2));

/*
    result:
    [ [ 'true', 'false', 'true' ], [ 'true', 'false', 'true' ] ]
*/

const spreadOut = () => {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
};

console.log(spreadOut());

/*
    result:
    ["learning", "to", "code", "is", "fun"]
*/

let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
];

console.log(nestedArray[2][1][0][0][0]);

/*
    Accessing value inside of nested object.

    If we accessing nested an array with square bracket and count it what number of array
    that contain value we looking for, for looking value inside of nested object we using
    the . (dot) notation.
*/

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

console.log((nestedObject.data.onlineStatus.busy = 10)); // 10

/*
    Access property name inside of Object using square bracket.

    the way we accessing value inside of an Object using square bracket can be very helpful.
    this way only available if we inside of a function.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

const checkInventory = (scannedItems) => {
  return foods[scannedItems];
};

console.log(checkInventory("oranges")); // 32

/*
    Check if an object has property.

    JavaScript provide us two different ways to do this.
    first, use the .hasOwnProperty() method
    second, use in, for instance "Aldo" in users;
*/

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

const isEveryoneHere = (userObj) => {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
};

console.log(isEveryoneHere(users)); // true

/*
    Explanation:
    every method will determines whether all the members of an array satisfy the specified test.
    and NOT RETURN A NEW ARRAY.
*/

/*
    Iterate through the keys of an object with a for .. in statement.

    Sometimes you may need to iterate through all the keys within an object.
    This requires a specific syntax in JavaScript called a for...in statement.
*/

const usersAgain = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

const checkOnline = (userObj) => {
  let result = 0;
  for (const user in userObj) {
    if (userObj[user].online === true) {
      result++;
    }
  }
  return result;
};

console.log(checkOnline(usersAgain)); // 1
