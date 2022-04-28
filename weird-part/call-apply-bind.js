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
*/
