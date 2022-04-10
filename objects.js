// Create an Object with Object Literal Notation
const job = {
  title: "Developer",
  location: "New York",
  salary: 50000,
};

console.log(job.title);
// Output:
// Developer

// Create an Object with "new" keyword and Date() built-in at JavaScript
console.log(new Date().toISOString());

// Diving deeper into "new" keyword and introduce with Class as Object Blueprints
class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("Chef", "Cibitung", 35000);
console.log(developer, cook);
// Output:
// Job { title: "Developer", location: "New York", salary: 50000 }
// Job { title: "Chef", location: "Cibitung", salary: 35000 }

// Using a method inside of a class
class Job2 {
  constructor(jobTitle, location, salary) {
    this.title = jobTitle;
    this.place = location;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.place}, I earn ${this.salary} dollar per year`
    );
  }
}

const developer2 = new Job2("Developer", "Jakarta", 45000);
const cook2 = new Job2("Chef", "Cibitung", 35000);

developer2.describe();
cook2.describe();
/*Output:
  I'm a Developer, I work in Jakarta, I earn 45000 dollar per year
  I'm a Chef, I work in Cibitung, I earn 35000 dollar per year
*/

/*
  Diving deeper into "new" keyword, with two steps:
  1. Creating a function without a constructor and "new" keyword
*/
function student(name, roll, course) {
  const studentObj = {};

  studentObj.name = name;
  studentObj.roll = roll;
  studentObj.course = course;

  return studentObj;
}

const student1 = student("Rhenaldo", 1011, "Javascript");
const student2 = student("Arya", 2011, "Javascript, NodeJs");

console.log(student1.name);
console.log(student2.course);

/*
  2. Create a function with a constructor and "new keyword";
  can be converted into class decralation ES2015 using the class and constructor
*/
function Student(name, roll, course) {
  this.name = name;
  this.roll = roll;
  this.course = course;
}

const student11 = new Student("Rhenaldo", 2121, "JavaScript");
const student22 = new Student("Arya", 9811, ["CSS", "HTML"]);

console.log(student11.name);
console.log(student22.course);

/*
  THIS KEYWORD WITH METHOD (FUNCTION INSIDE OF AN OBJECT)

  arrow function with "this" keyword will not bind to anything, it will always refererring
  to the outside of the function (global windows)

  very different with regular function, with regular function, this keyword will referring
  and binding to the same object or to the same function we looking to

  outside of the method, arrow function will shine and "this" keyword will referrring to
  the object or function we looking to.

  OR FOR SIMPLY FOR DETERMINING THE THIS OBJECT IS LOOK BASED ON WHAT THE THIS KEYWORD IS CALLING
*/
