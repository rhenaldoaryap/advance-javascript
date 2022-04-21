/*
    iterators

    iterators basically just an object with next() method.
    And then returning two value
    1. value key of the object
    2. done key and as a signal whether we can get the rest of value (looping) or not (boolean)

*/
const company = {
  curEmployee: 0,
  employess: ["Rhenaldo", "Arya", "Pangestu"],
  next() {
    if (this.curEmployee >= this.employess.length) {
      // giving signal we done with the loop
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employess[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
