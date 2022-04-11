let dog = {
  name: "Gemoy",
  numLegs: 4,
  identify() {
    return `this dog has name ${this.name} and has ${this.numLegs} legs`;
  },
};

console.log(dog.identify());

/*
    Constructor
*/

class Dog {
  constructor(name, age, numLegs) {
    this.name = name;
    this.age = age;
    this.numLegs = numLegs;
  }
}

Dog.prototype.type = "chihuahua";

console.log(typeof Dog);

/*
    explanation:
    constructor are functions that create new objects.
    They define properties and behaviours that will belong to the new object.
    Think of them as a blueprint for the creation of new objects.

    result of that console.log is function.
    because, Class is a function.
*/

/*
    new keyword
    Notice that the new operator is used when calling a constructor.
    This tells JavaScript to create a new instance of Dog called hound.
    Without the new operator, this inside the constructor would not point to the
    newly created object, giving unexpected results.
*/
let hound = new Dog();

/*
    Understand own properties.
    In the following example, the Dog constructor defines three properties:
    1. name
    2. age
    3. numLegs

    those properties called OWN PROPERTIES, because they are defined directly on the instance object.
    That means that hound has own separate copy of that property.
    In fact, every instance of hound will have its own copy of that property.

    To check whether the code above has their own property you can check like below:
*/

let ownProps = [];
let prototypeProps = [];

for (let property in hound) {
  if (hound.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps, prototypeProps);

/*
    result:
    ["name", "age", "numLegs"]
*/

/*
    Use prototype properties to reduce duplicate code.

    Since numLegs will probably have the same value for all instances of Dog,
    you essentially have a duplicated variable numLegs inside each Dog instance.

    This may not be an issue when there are only two instances,
    but imagine if there are millions of instances.
    That would be a lot of duplicated variables.

    A better way is to use the prototype of Dog.
    Properties in the prototype are shared among ALL instances of Dog.
    Here's how to add numLegs to the Dog prototype:
    Dog.prototype.type = "chihuahua" -> see at line 23
*/

/*
    Iterate over all properties.

    You have seen two kinds of properties: own property and prototype property.
    the diffrence between those is:
    own property declare directly inside on the object instance itself.
    prototype property declare outside of the object, see line 23

    To check whether Dog has ownproperty and prototype property or not you could see at
    line 60 until 71.

    the result will be:
    [ type ]
*/

/*
    Behind the scene about Constructor() function.
    See the code below:

    class Person {
      name = "Rhenaldo";

      constructor() {
        this.age = 23;
      }

      greet() {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old)
      }
    }

    code above behind the scenes will look like below:
*/

function Person() {
  this.name = "Rhenaldo";
  this.age = 23;
  this.greet = function () {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const person = new Person();
person.greet();
