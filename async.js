const fs = require("fs");

// Without using asynchronous code and callback function
function readFile() {
  let fileData;

  fileData = fs.readFileSync("data.txt");

  console.log(fileData.toString());
  console.log("Hi There!");
  console.log("-- Below here using asynchronous code and callback function --");
}

readFile();

// With using asynchronous code and callback function
function anotherReadFile() {
  let fileData;
  // this container can be omitted

  fs.readFile("data.txt", function (error, fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });

  console.log("Hi There!");
}

anotherReadFile();
