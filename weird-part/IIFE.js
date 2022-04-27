/*
    Immediately Invoked Function Expression (IIFE)
*/

// using function statement
function greet(name) {
  console.log(`Hi ${name}`);
}
greet("Aldo");

/*
    using function expression
    this code below is Immediately Invoke Function Expression.
    We creating a function on the fly and we invoked it immediately
    and then we passing the argument as value that expected by parameter
*/
let expressionFunction = (function (name) {
  return `Hello ${name}`;
})("Aldo");
console.log(expressionFunction);

/*
    Next question is:
    We know there are two phases of using an function/variable
    1. Creation Phase
    2. Execution Phase

    How if we use the function statement and just sitting there and not do anything?
    see the code below:
    we still use the IIFE but we change the function statement to be function expression
    with do little trick which we add the parantheses in front of and at the end of the function

    because, function expression is whatever it is the right after the equal sign OR function that will
    return a value. With adding the parantheses, of course JavaScript engine will execute it first because
    JavaScript engine will expect "Oh, this is a function expression, we should execute it first"

    and that is how we change the function statement to be function expression and we use IIFE.
*/
let firstName = "Rhenaldo";

(function (name) {
  let greeting = `This greeting coming from IIFE`;
  console.log(`${greeting} ${name}`);
})(firstName);
