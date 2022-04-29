let people = [
  {
    firstname: "Rhenaldo",
    lastname: "Pangestu",
    address: ["111 main St", "Pluto XVIII"],
  },
  {
    firstname: "Arya",
    lastname: "Cinthyanisa",
    address: ["132 north arctic", "Mars XVIII"],
    greet: function () {
      return `Hello, rhenaldo`;
    },
  },
];

console.log(people[1].address);
