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
