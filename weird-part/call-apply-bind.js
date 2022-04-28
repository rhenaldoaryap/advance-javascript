/*
    Call - Apply - Bind

    Basically, call - apply - bind is a method that give an access
    to control where the 'this' keyword point to.
    All functions in JavaScript has access to these three methods.
*/

let person = {
  firstname: "Rhenaldo",
  lastname: "Pangestu",
  getFullname: function () {
    let fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  },
};

// adding lang1 and lang2 to use the call method
let logName = function (lang1, lang2) {
  console.log(`Logged ${this.getFullname()}`);
  /*
  after using bind method, code above essentially will be
  console.log(`Logged ${person.getFullname()}`);
  */
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log("---------------");
}.bind(person);

logName();
/*
    result:
    Logged Rhenaldo Pangestu
    Arguments: undefined undefined
*/
logName.call(person, "english", "beklish");
/*
    result:
    Logged Rhenaldo Pangestu
    Arguments: english, beklish
*/
logName.apply(person, ["english", "beklish"]);
// OR

let logPersonName = logName.bind(person);
logPersonName();
/*
    result:
    Logged Rhenaldo Pangestu
    Arguments: undefined undefined
*/

/*
    Bind function returns a new function and
    actually makes a copy of the function calling it on
    JavaScript engine will look what function/object we pointed to
    because of bind method.
*/

/*
    Call.
    call is like calling the function and invokes it, we can use the parantheses to invoke the function instead of
    call method.
    BUT THE DIFFERENT is, the call method is allows us to control what the 'this' keyword will be
    and we can pass the argument inside of the call method.

    Unlike bind method that will create a copy of the function, call method just execute it.
*/

/*
    Apply.
    Apply same like call method, but the different is, apply method wants an array instead of normal list.
*/

/*
    Creating a function on the fly using the function expression
*/
(function (lang1, lang2) {
  console.log(`Logged: ${this.getFullname()}`);
  console.log(`Arguments ${lang1} ${lang2}`);
  console.log("---------------");
}.apply(person, ["english", "beklish"]));
/*
    result:
    Logged: Rhenaldo Pangestu
    Arguments english beklish
    ---------------
*/

/*
    When we using the call - apply - bind method in real life?
    Let's see an instance below:
    the code above is called FUNCTION BORROWING
*/

let person2 = {
  firstname: "Omo",
  lastname: "kucing",
};

console.log(person.getFullname.apply(person2));
/*
    result:
    Omo kucing

    explanation:
    We using the person object and use the getFullname method inside of it and then we use the apply method
    because inside of the getFullname method we use the this keyword to reference the variable we looking for,
    and we use the apply method, the this keyword inside of the getFullname method will reference to the object
    we applied to.

    so the this keyword inside of the getFullname method will be ${person2.firstname} ${person2.lastname}

    this can only be happpens as long as we have similiar property names between of two objects we used to.
*/

/*
    function currying

    function currying can be using when we use the bind method,
    when we passing a parameter to bind method, we will see some interest thing
    see the code below:
*/
function multiple(a, b) {
  return a * b;
}

const multipleByTwo = multiple.bind(this, 2);
console.log(multipleByTwo(4));
/*
    result:
    8

    explanation:
    when we use the bind method to a function and we pass the argument to it
    we don't care about what the this keyword contain because we are not use the 'this' reference
    inside of the function we binding at.

    Bind method can accept two arguments, first one the function we want to binding at and the second one is
    the argument we want pass to as much as we want
    If we do like line 127, that means the two (second argument) will permanently fill in the first parameter

    so under the hood, the code will be look like this:

    function multipleByTwo(b) {
        let a = 2;
        return a * b
    }

    const multipleByTwo = multiple.bind(this, 2)

    that means, our code (not code under the hood) will be like this:

    function multiple(2, b) {
        return 2 * b
    }

    const multipleByTwo = multiple.bind(this, 2)
    multipleByTwo(4)

    ===========================
    So, when we call the function by the store variable -> multipleByTwo(4)
    the argument inside of that variable will fill in the second argument
    and will end up 4 * 2 and the result will be 8

    How if we pass the third argument (still counted as second parameter because bind method will spread it)?
    function multiple(a, b) {
        return a * b
    }

    const multipleByTwo = multiple.bind(this, 2, 3)
    multipleByTwo(4)

    bind method will permanently pass the a = 2, b = 3
    and end up to be 6

    So what the parameter doing at the multipleByTwo?
    that will be an extra parameter if we not pass the second parameter when we binding it.

    How if we pass no parameters to bind method?
    the multipleByTwo will play in action
    function multiple(a, b) {
        return a * b
    }

    const multipleByTwo = multiple.bind(this)
    multipleByTwo(5, 2) -> 10
*/
