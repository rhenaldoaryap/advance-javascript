function a() {
  function b() {
    console.log(myVar);
  }

  let myVar = 2;
  b();
}

let myVar = 1;
a();

/*
    explanation:
    the result will be 2, because of the chain scope.
    Chain scope means JavaScript will look or search the variable until get that variable.

    If inner function (which is function b) is not found the variable that we looking for,
    it will look to the outer function (in this case is looking/search of the myVar variable).

    And then if the outer function is not found the variable we looking for, it will look/search
    to the global execution context. So for the first time, myVar is 1, and then we call function a.

    Inside of function a, we override myVar value to two (2). So, now myVar is two, and then we call
    (executed the function b, inside of function b is we did not declare any variable inside of it, so myVar still 2)

    That can be happen with call stack, remember the FIFO (First In First Out) which means, the first function
    get called, the first too that function taking out of the stack. And we use the reference to the outer lexical
    environment, outer lexical environment is the reason why we can override myVar value
*/

/*
    coercion
*/
let coercion = "10" + 2;
console.log(coercion);
/*
    explanation:

    + -> coercion to be a string
    let coercion = "10" + 2 // "102"

    Why this can be 102 string?
    because JavaScript engine will look the data type and it will coercion
    the add function to be a string, and JavaScript will guest as best as it can to define
    what the code that developer want to save to the variable instead of throwing an error.
    And again, JavaScript will convert it to be a string

    - -> coercion to be an integer
    let coercion = "10" - 2 // 8

    / -> coercion to be an integer
    let coercion = "10" / 2 // 5

    % -> coercion to be an integer
    let coercion = "10" % 2 // 0

    * -> coercion to be an integer
    let coercion = "10" * 2 // 20
*/

/*
    comparison operator
*/

console.log(3 < 2 < 1); // true

/*
    explanation:

    how the f that can be true?
    3 < 2 < 1 would be false, obviously
    because 3 is not less than 2, and 2 is not less than 1

    but why that yield true?
    remember the precedence and associativity
    when the precedence is same level, associativy come into play

    what actually happens is
    when associativity come, JavaScript will count the first operator function
    that would be -> console.log(false < 1)

    and then JavaScript engine will try to coercion the boolean to a number.
    In JavaScript, falsy will return 0 and truthy will return 1.
    That means, the next calculation is -> console.log(0 < 1) and of course, this will yield true.

    To make sure and make more understand about what actually happens is, you can use the dev-tools
    and using Number variable on it.
    Number(false) -> 0
    Number(true) -> 1
*/
