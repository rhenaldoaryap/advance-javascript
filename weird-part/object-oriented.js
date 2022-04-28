/*
    Classical and Prototypal Inheritance
*/

let person = {
  firstname: "default",
  lastname: "default",
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

let rhenaldo = {
  firstname: "Rhenaldo",
  lastname: "Arya",
};

/*
don't do this EVER! Only for demo purposes
why we don't do this? because there is a performance problem
*/
rhenaldo.__proto__ = person;
console.log(rhenaldo.getFullname()); // Rhenaldo Arya
console.log(rhenaldo.firstname); // Rhenaldo

let pangestu = {
  firstname: "Pangestu",
};

pangestu.__proto__ = person;
console.log(pangestu.getFullname()); // Pangestu Default
