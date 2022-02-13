// Create an Object with Object Literal Notation
const job = {
  title: "Developer",
  location: "New York",
  salary: 50000,
};

console.log(job.title);

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
const cook = new Job("Cook", "Cibitung", 35000);
