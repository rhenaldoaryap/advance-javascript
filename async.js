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
    // handling error using callback
    // if (error) {
    //   ...
    // }
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

  // Example dummy data if we want to using promise to avoiding callback hell and handling error with catch method();
  // fs.readFile("input-data.csv")
  //   .then(function (data) {
  //     const cleanedData = cleanData(data);
  //     return storedDataInDatabase(cleanedData);
  //   })
  //   .then(function (result) {
  //     if (result.changeData) {
  //       return confirmDataChange();
  //     }
  //   })
  //   .then(function (done) {
  //     if (done) {
  //       res.render("success");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     // we consoling that error to see what cause that errors occured
  //   });

  console.log("Hi There!");
}

readFileAgain();
