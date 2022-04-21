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
  /*
    generators

    basically generators will build up for us an iterators object
    instead of creating it manually, we can use the generators to create
    such an iterators object we can use later.
    below is the generators code
  */
  [Symbol.iterator]: function* employeeGenerator() {
    /*
      let employee = company.next();

      while (!employee.done) {
          yield employee.value;
          employee = company.next();
      }
      */
    let currentEmployee = 0;
    while (currentEmployee < this.employess.length) {
      yield this.employess[currentEmployee];
      currentEmployee++;
    }
  },
  /*
    explanation:

    what the code does is create A NEW OBJECT when this function is called
    which has next() method on its own

    yield keyword is same like return keyword
  */
};

for (const employee of company) {
  console.log(employee);
}
