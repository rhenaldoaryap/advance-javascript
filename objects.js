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
// Output:
// I'm a Developer, I work in New York, I earn 45000 dollar per year
// I'm a Chef, I work in Cibitung, I earn 35000 dollar per year
