/*
    JSON is inspired from Object Literal Notation.
    The shape or body is quite similiar, but there is a tiny different,
    the different is the JSON key is must wrapped in double quotes.

    We can convert JavaScript object into JSON format or otherwise.
    JSON has two method:
    1. stringify -> convert JavaScript Object into JSON format
    2. parse -> convert JSON format into JavaScript Object
*/

let objectLiteral = {
  firstname: "Rhenaldo",
  isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));

/*
    output:

*/

let JSONValue = JSON.parse('{"firstName": "Rhenaldo", "isAProgrammer": true}');
console.log(JSONValue);
