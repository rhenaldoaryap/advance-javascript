const fs = require("fs");

// try using try-catch error
function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch {
    console.log("An error occured!");
  }
  console.log("Hi There!");
}

readFile();
