/* const listItems = document.querySelectorAll("li");
console.log(listItems); */

/*
    result:
    NodeList(3) [li, li, li]
*/

/*
    Array.from()
    will convert a like-array or iterable objects to be REAL ARRAY
    and then we can do lot of method with that real array

    How we can know an element is like-array not a REAL ARRAY?
    for instance, list item is like-array not a REAL ARRAY
    if you console.log it, you will se NodeList
    NodeList is example of like-array
*/
/* const arrayListItems = Array.from(listItems);
console.log(arrayListItems); */

/*
    result:
    (3) [li, li, li]
*/

/*
    Find single item inside of nested array
    BUT you have to be careful and concern all of that data must be nested array
    because we loop it through inside of that nested array
    is there is a single item and not inside of nested array, the loop
    will broken and throw an error.

    What does mean?
    see this example:
    const analyticData = {
        [1, 1.5],
        [-5.5, 2.1],
        5
    }

    that code above will throw an error, because we have a single value that not inside
    of a nested array.
*/

const analyticData = [
  [1, 1.5],
  [-5.5, 2.1],
];

for (const data of analyticData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
    /*
        1
        1.5
        -5.5
        2.1
    */
  }
}

/*
    concat method
    concat method will combine two or more array, slightly like push method but there is huge different
    between concat and push.
    push will add a new item into the array at the end of array BUT ONLY COUNT AS A SINGLE ITEM.
    concat will combine two or more array and store it at the end of array and we can store
    AN ARRAY NOT A SINGLE ITEM.

    concat method will return a brand new array.

    see example:
*/

const dataArray = [1, 2, 3.8, 9.0, -5.4, -889];

const concatingArray = dataArray.concat([4, 5, 6, 7, 8]);
console.log(concatingArray);

/*
    result:
    (11) [1, 2, 3.8, 9, -5.4, -889, 4, 5, 6, 7, 8]
*/

/*
    indexOf() method.
    indexOf() method will search a match value and it will return as soon as possible
    when found the first match value.

    lastIndexOf() method.
    lastIndexOf() method can be very useful when you want to find the matchest element
    from last index, same like indexOf() it will return as soon as possible when found
    the first match value from the last index.

    those two methods ONLY WORK FOR PRIMITIVE VALUES, AND NOT GONNA WORK FOR REFERENCE VALUE
    if you try to find an index either first match or last match of the index at the reference value
    it always yield -1.

    Why always yield -1?
    because those method could find the match value you looking for and then it will
    always return -1.

    so, how to find the matches index if we using reference value? see below
*/
console.log(concatingArray.indexOf(-5.4), concatingArray.lastIndexOf(5));

/*
    result:
    4 7
*/

/*
    find() method
    find() method will yield predicate of value you looking for.
    find() method typically will use the anonymous function the execute the method.
    find() method can take up to three (3) arguments.
    1. a single object of the array (we can choose any name we want, typically singular)
    2. the index of that single element
    3. the full array (typically plural)

    and then who calling the anonymous function then?
    JavaScript will calling it automatically for us.

    it is like-create-a-new object because we can name the argument whaterver we want.

    find() method will return the object

    see example:
*/
const personData = [{ name: "Rhenaldo" }, { name: "Arya" }];
console.log(
  personData.find((person, idx, persons) => {
    return person.name === "Rhenaldo";
  })
);

/*
  result:
  { name: "Rhenaldo" }
*/

/*
  findIndex() method.
  simply return the index of the reference value we looking for.
*/
console.log(
  personData.findIndex((person, idx, persons) => {
    return person.name === "Arya";
  })
);

/*
  result:
  1
*/

/*
  find() and findIndex() IS CASE SENSITIVE.
  Always return -1 if not found the value we looking for.
*/

/*
  forEach() method.
  forEach() method ONLY AVAILABLE TO AN ARRAY.

  can we say, forEach() is replacement for for .. of loop.

  and just like find and findIndex will use anonymous function to execute the method.
  forEach() method can take up to three arguments same like find and findIndex method.
*/
const prices = [10.99, 5.99, 11.0, 3.9, 1.2];
const tax = 0.99;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  return a - b;
});

console.log(sortedPrices);

/*
    reverse method()
    simply will reverse the result you got.
*/

console.log(sortedPrices.reverse());

console.log(prices.filter((price) => price > 6));

const totalPrice = prices.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(totalPrice);

/*
    explanation:
    reduce method will calculate between the initial value and the currentvalue.

    what does that mean?
    for example, actually, reduce method have a second argument, that second argument is the initial value
    and the initial value of the second argument is 0 (zero).
    and the currentValue is the first element in array.

    so, the 0 will fill the previousValue container and store it there,
    and the currentValue will be 10.99
    if we calculate to add numbers between previousValue and currentValue that will be 0 + 10.99.

    the result 10.99 will be stored as the previousValue container
    and then the currentValue will look for the second element in the array,
    the calculation will be 10.99 + 5.99.

    it will iterate until value inside of an array ended.
    if we use the container at line 172, the result will be
    33.080
*/

/*
    spread operator.
    sperad operator will return a new array or object (copying) based on the thing you spread,
    and then you could do whatever you want to that new array or object.
*/
const names = ["Rhenaldo", "Arya"];

const copiedName = [...names];
names.unshift("Mr");
console.log(names, copiedName);

/*
    result:
    [ "Mr", "Rhenaldo", "Arya" ] [ "Rhenaldo", "Arya" ]
*/

/*
    Array
    Sets
    Maps

    three type of data.
    Array we have learn lot of about it.

    Set.
    Set is a type of data that willing to us to only have one value and
    not allowed to have a duplicate value inside of a variable.
    to be able using sets, we MUST USE NEW KEYWORD in front of it

    sets have a match method, that method is .has()
    .has() method only return two possibilities;
    1. true
    2. false

    .has() method will check whether it contains something or not.

    see the example:
*/
const ids = new Set([1, 2, 3]);
console.log(ids.has(1)); // true

for (const value of ids.entries()) {
  console.log(value);
  /*
    result:
    [ 1, 1 ]
    [ 2, 2 ]
    [ 3, 3 ]
  */
}

/*
    Map.
    Map is a type of data that can help us to add more data inside of an object without
    harm the old object, might be that object is being used in other part of our web
    application and we couldn't do much more with that object.

    maps have a match method, that method is .get()
    and also we can add a value inside of an object with help of method .set()

    and how we can fetch the result of that object?
    there are three ways to taking out the result;
    1. for .. of loop and using destructuring array to taking out key, value information
    2. for .. of loop and only taking out the key with help of .keys() method
    3. for .. of loop and only taking out the value with help of .values() method

    see example:
*/

const person1 = { name: "Rhenaldo" };
const person2 = { name: "Arya" };

const personDataAgain = new Map([
  [person1, [{ date: "yesterday", price: 10 }]],
]);

personDataAgain.set(person2, [{ date: "yesterday", price: 10 }]);

console.log(personDataAgain);
console.log(personDataAgain.get(person1));

// using array destructuring
for (const [key, value] of personDataAgain) {
  console.log(key, value);
  /*
    result:
    { name: 'Rhenaldo' } [ { date: 'yesterday', price: 10 } ]
    { name: 'Arya' } [ { date: 'yesterday', price: 10 } ]
  */
}

// only taking out the key information
for (const key of personDataAgain.keys()) {
  console.log(key);
  /*
    result:
    { name: "Rhenaldo Arya" }
    { name: "Arya" }
  */
}

// only taking out the value information
for (const value of personDataAgain.values()) {
  console.log(value);
  /*
    result:
    [ { date: 'yesterday', price: 10 } ]
    [ { date: 'yesterday', price: 10 } ]
  */
}

/*
    summarize:
    set is used for array
    map is used for object
*/
