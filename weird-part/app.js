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
