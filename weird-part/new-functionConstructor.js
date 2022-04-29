/*
    new here is a another way to create an object, for instance:

    const rhenaldo = new Person;
*/

function Person(firstname, lastname) {
  console.log(this); // Person { }
  /*
    creating new variable with this keyword
    and dynamically pass the value from the parameter to accept it later as argument
    when we call this function
    */
  this.firstname = firstname;
  this.lastname = lastname;
  console.log(`This function was invoked to prove the 'new' keyword`);
}

/*
    Remember, everytime we create a function, we already get the prototype uncosciously, but the prototype
    just sitting there not do anything until we use the function constructor.

    But, the prototype is not a prototype of the function it self, but the prototype is the prototype of
    any object we create. Again, always remember, function in JavaScript is a special object or in the end
    we could say, in JavaScript, function is just an object.

    See the code below:
    we use the prototype that by automatically we get when we create a function,
    and we create a method inside of it, because function inside of an object is called method.

    When we add a method to function constructor, every child of the variable that used the Object will
    get the method, so it is like sharing the method to all Object as long as pointing to the same object.
    How that can happen?
    because, Person.prototype is also created for rhenaldo and arya variable, those two variable
    also have the same method, because it is pointing to the same object.

    That means we can create another feature(method) at once by using .prototype and type the feature(method)
    we want to create, as long as still point to the same object, this is very useful.
*/
Person.prototype.getFullname = function () {
  return this.firstname + " " + this.lastname;
};

const rhenaldo = new Person("Rhenaldo", "Pangestu");

console.log(rhenaldo);
/*
    result:
    the output is the Person Object
    remember, in JavaScript, function is just a regular Object

    explanation:
    new keyword is just operator, you can search it at JavaScript Operator Precedence
    there is new keyword in it and have score 18 precedence.
    So, when we use the new keyword, Immediately an empty object is created

    Everytime we use the new keyword in front of the function, we create an empty object
    and then if we use the this keyword inside of the function that we invoked at, we
    pass the variable to that empty object. Under the hood the code look like this

    Person = {
        firstname: "Rhenaldo",
        lastname: "Pangestu"
    }
*/

/*
    next question, how if we want to create another object but use the same functionConstructor?

    Remember, when we use the new keyword in front of a function, we just build an empty object
    and if we want to use the function constructor and pass the other value
    We can do that by passing the parameter to that function, so we not hard coded the value
    inside of the this keyword.

    See the Person object, we passing the parameter, before it, it has no parameter in it.

    IMPORTANT, as long as we DO NOT return anything inside of that function,
    JavaScript engine will allow us to 'manipulate' value inside of it.
    If we return any variable inside of it, that variable automatically will be prioritize of JavaScript
    engine and will return that object instead of returning the value that we already 'manipulate' it.
*/
const arya = new Person("Rhenaldo", "Pangestu");
console.log(arya);
