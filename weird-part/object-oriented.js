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

for (const prop in rhenaldo) {
  /*
  remember object is key-value based
  ${prop} will contain -> key
  ${rhenaldo[prop]} use the key to access the property
  */
  if (rhenaldo.hasOwnProperty(prop)) {
    console.log(`${prop} ${rhenaldo[prop]}`);
  }
  /*
    result:
    firstname Rhenaldo
    lastname Arya
    getFullname: function() {
      return `${this.firstname} ${this.lastname}`
    }
  */
  /*
    getFullname method can be outputted to because it is already store inside of the __proto__ object by default
    so, how if we just want to acces and output the key-value of the object?
    use the built-in method, that build-in method is hasOwnProperty
    check line 39
 */
}
