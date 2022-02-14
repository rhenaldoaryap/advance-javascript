// Old ways and not destructing an arrays
const input = ["Rhenaldo", "Arya"];

const first = input[0];

const second = input[1];

console.log(first, second);
// Output
// Rhenaldo Arya

// Destructuring array
const input2 = ["Rhenaldo", "Arya"];

const [firstName, lastName] = input2;

console.log(firstName, lastName);
// Output
// Rhenaldo Arya
// For Destructuring an array, the order is matters

// Old way and not Destructuring objects
const job = {
  title: "Developer",
  salary: 50000,
};

const dev = job.title;

console.log(dev);
// Output
// Developer

// Destructuring objects
const job2 = {
  title: "Developer",
  salary: 50000,
};

const { title, salary } = job2;

console.log(title, salary);
// Output
// Developer 50000
// For Destructuring an object, the order is not matters not the properties is
