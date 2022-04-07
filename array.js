const listItems = document.querySelectorAll("li");
console.log(listItems);

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
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

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
