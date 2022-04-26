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

/*
    giving default value with legacy code before ES6
*/

function greet(name) {
  name = name || "<Your name here>";
  console.log("Hello " + name);
}

greet(); // Hello <Your name here>

/*
    explanation:

    Always remember about precedence and associtivy
    an operator (+, -, /, *, &&, ||) basically just a function and return a value
    for JavaScript, operator will look like this
    function +() {}
    function -() {}
    function /() {}
    and so on..

    || (OR) operator has a special behavior, that operator always return a true value
    for example:
    0 || "Hello" -> "Hello"
    "Hello" || undefined -> "Hello"
    "" || "Hello" -> "Hello"

    || (OR) operator always return true value if one of the value returning a true
    how if we giving the true value for both values?
    "Hi" || "World" -> "Hi"
    it will return the first true value

    because on the precedence and associtivy, = (equal) is higher precedence than || (OR) operator
    and that means the || will evaluate first and then equal will be evaluate after it.
    It runs left-to-right, so that make sense if the || (OR) operator will return the first true value
    if there are two true values in it.
*/

/*
    Object and functions
*/

/*
    creating an object with shorthand new Object()
    not recommend to create such an object like this
    because it is hard to read and hard to maintenance
*/

let person = new Object();

person["firstname"] = "Rhenaldo";
person["lastname"] = "Pangestu";

let firstnameProperty = "firstname";
console.log(person);
console.log(person.firstname); // dot or member accesss operator
console.log(person[firstnameProperty]); // computed member access operator
console.log(person["firstname"]); //

/*
    creating an object with object literals
    creating an object with this way is recommend because it is more readable
    and more faster and stronger than using the shorthand syntax
*/

let personObjectLiterals = {
  firstname: "Rhenaldo",
  lastname: "Pangestu",
  address: {
    street: "Pluto VIII",
    city: "Bekasi",
    state: "Jawa Barat",
  },
};

function greetPersonObjectLiterals(person) {
  console.log("Hi " + person.firstname);
}

greetPersonObjectLiterals(personObjectLiterals); // "Hi Rhenaldo"

/*
    we can also create an object anywhere we want, for example
    when we calling our function and create an object on the fly (to do something quickly)
*/

greetPersonObjectLiterals({
  firstname: "Arya",
  lastname: "Robert",
}); // "Hi Arya"

/*
    not just that, we can create a new variable inside of a function.
    How we can do that?
    because in JavaScript, function is object
    JavaScript contain the First Class Function, that means we can add another type of data to a function.


    Function is a special type of object.
*/

// take function from line 97
greet.language = "english";
console.log(greet.language); // english

/*
    Function Statements and Function Expressions

    You can easily remember the function expressions is whatever it is after the equal sign
    or function expressions it is return a value.

    function statements is the opposite of the function expressions.
    function statements just sitting here all by it self. The example of function statement is
    if () statement, that is one of the example.

    When using function statements or function expressions, remember about
    JavaScript is First Class Function.
    That means we can pass any type of data to a function, either that is a numbers, boolean, string
    whatever it is.

    So see the code:
*/
// function statement
anotherGreet();

function anotherGreet() {
  console.log("Hi"); // return -> Hi
}

// function expressions
// anonymousGreet();

let anonymousGreet = function () {
  console.log("Hi"); // return -> undefined is not a function
};

anonymousGreet();

/*
    How that can be an undefined is not a function?
    because the expression function is not Hoisted.
    Why that expression function is not hoisted?

    Remember about the creation phase and execution phase,
    what does it set the variable equal to before it starts execution the code?
    Yup, undefined.
    When we calling the function expressions before we initialized a value to that function,
    JavaScript will translate it to undefined first, so the code of function expression will end up like:

    let undefined = function() {
        console.log("Hi")
    }

    So, how to make it work?
    We should call the function expression after we initialized the value, not before it.
*/
