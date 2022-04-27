// by value (primitives)
let a = 3;
let b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

/*
    If we use by value, JavaScript will create a copy of that variable
    and they are will store at the different of address in the memory
*/

// by reference (all objects includes functions)
let c = { greeting: "Hi" };
let d;

d = c;

/*
    When we using by reference value, JavaScript will point at the same address
    of that objects/functions.
    JavaScript will not create a copy of the address, they are simply pointing
    to the same spot in the memory.

    But, if we declare a new object with the same key-value name, JavaScript
    will create a new memory in space and not pointing at the same memory
*/
c = { greeting: "Howdy" };
console.log(c); // Howdy
console.log(d); // Hi

/*
    ==================================================================
    Object - functions - 'this'
    ==================================================================
*/
function ab() {
  console.log(this); // Window Object
  // create new variable on the fly with pointing to the windows object
  this.newvariable = "Hello";
}

function ba() {
  console.log(this); // Window Object
}

ab();
/*
    we can console/print the new variable with pointing at it
    just like pointing to the function
*/
console.log(newvariable); // Hello
ba();

/*
    ==================================================================
    Method in object literal
    ==================================================================
*/
let cd = {
  name: "The c object",
  log: function () {
    let self = this;
    /*
        this keyword below will be pointing to the name of the object (cd object)
        that means, we can change any value inside of this object, like example below
    */
    self.name = "New value of c object";
    console.log(self); // New Value of c object
    /*
        what is going to happen if we using this keyword inside of method that contain a method?
        where the 'this' keyword will be pointing to?

        'this' keyword if that exists inside of a method that contain a method, will pointing to the
        window object, BUT we can still our name variable that already update the value to be
        "Updated the C object, again!"

        So, we can say, 'this' keyword if inside of a method that contain a method is not pointing to the same
        object we looking to.
        Many developer feels like this is a bug of JavaScript, but it is not.
        That is a way of JavaScript behaviour, so how do we solve this then?

        Usually, we declare a new variable that contain this keyword, so we always referring to the same object
        see line 65, the name of the variable can be anything, we choose self to make it clear we pointing to the
        object it self.

        And then we change all the this keyword with the variable that store 'this' keyword to be referring to the
        same object.
        Always remember about creating phase and execution phase.
        When we declare any variable, object or function we already inside of creating phase and JavaScript store
        that variable inside of memory and preparing for us to be execute by us and then will be execution
        phase.
    */
    let setname = function (newname) {
      self.name = newname;
    };
    setname("Updated the C object, again!");
    console.log(self); // Updated the C object, again!
  },
};

cd.log();
