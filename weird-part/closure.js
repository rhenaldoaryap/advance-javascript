function greet(whattosay) {
  return function (name) {
    console.log(`${whattosay} ${name}`);
  };
}

greet("Hi")("Rhenaldo"); // Hi Rhenaldo

/*
    now, let's step to next level
*/
let greetVariable = greet("Hi");
greetVariable("Rhenaldo"); // Hi Rhenaldo

/*
    explanation:

    How the greetVariable still known the variable of whattosay?
    Remember about the execution phase and execution stack.
    Global execution context -> execute another function -> execute another function -> and so on..

    The stack will be:
    greet function will be the bottom of the stack
    anonymous function will be at above of the greet function.

    First we call the greet function that contain and return the whattosay variable,
    when the function is finish execute, it will be popped off of the execution stack
    and then the next stack will be execute (anonymous function that still contain the whattosay variable)
    and that is why when we store it to new variable we can call the next function and pass the concrete value
    to expected parameter inside of anonymous function using outer lexical environment reference.

    although the greet function was popped of the stack and we use the outer lexical environment reference, this
    phenomenon of it closing in all the variables that it is supposed to have access to outer variable,
    it is called a closure.

    Closure is a feature inside of JavaScript Programming Language
    The JavaScript engine will always make sure whatever function I am running, that it will have access to
    the variables that is supposed to have access to.
    That it is scope is intact (utuh)
*/
