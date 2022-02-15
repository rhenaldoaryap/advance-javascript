const fileSystem = require("fs");
const fs = require("fs").promises;

// Without using asynchronous code and callback function
function readFile() {
  let fileData;

  fileData = fileSystem.readFileSync("data.txt");

  console.log(fileData.toString());
  console.log(
    "Hi There! Here without using asynchronous code and callback function"
  );
  console.log("-- Below here using asynchronous code and callback function --");
}

readFile();

// With using asynchronous code and callback function
function anotherReadFile() {
  let fileData;
  // this container can be omitted

  fileSystem.readFile("data.txt", function (error, fileData) {
    console.log("File parsing done without using promise!");
    console.log(fileData.toString());
  });

  console.log("Hi There! Here using asynchronous code");
  console.log("-- Below here using Promises for avoiding Callback Hell");
}

anotherReadFile();

// Using Promises
function readFileAgain() {
  let fileData;

  fs.readFile("data.txt").then(function (fileData) {
    console.log("Parsing file done! using Promise");
    console.log(fileData.toString());
  });

  console.log("Hi There!");
}

readFileAgain();
