/* let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2); */

function mapForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

let arr1 = [1, 2, 3];
const arr2 = mapForEach(arr1, function (itemInsideOfLoop) {
  return itemInsideOfLoop * 2;
});

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [2, 4, 6]
/*
because we use the functional programming, this is very powerfull and we can do other things and not just
a mathematical operation
*/
let arr3 = mapForEach(arr1, function (itemInsideOfLoop) {
  return itemInsideOfLoop > 2;
  /*
  will be [1, 2, 3] > 1
  1 > 1 -> false
  2 > 1 -> true
  3 > 1 -> true
  */
});
console.log(arr3); // false, false, true

/*
    using bind.
    remember, when we using bind method, we returning a copy of that function
    and if we pass the second parameter, that second parameter will be permanently fill in the first parameter.
*/

let checkPastLimit = function (limiter, itemInsideOfLoop) {
  return itemInsideOfLoop > limiter;
  /*
    limiter will be 1 because we pass the second parameter when we use the bind method.
    will be 1 > [1, 2, 3]
    1 > 1 -> false
    1 > 2 -> true
    1 > 3 -> true
    */
};

let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // false, true, true

let checkPasLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

let arr5 = mapForEach(arr1, checkPasLimitSimplified(2));
console.log(arr5); // false, false, true
/*
    function above will output:
    2 > [1, 2, 3]
    2 > 1 -> false
    2 > 2 -> false
    2 > 3 -> true
*/
