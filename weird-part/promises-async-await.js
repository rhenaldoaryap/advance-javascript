/* const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catches.forEach((c) => c(err));
  }

  this.then = function (callback) {
    if (state === FULFILLED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
  };

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res("Hello World");
  }, 1000);
};

let someText = new CustomPromise(doWork);

someText.then((val) => {
  console.log(`1st log ${val}`);
});

someText.then((val) => {
  console.log(`2nd log ${val}`);
});

setTimeout(() => {
  someText.then((val) => {
    console.log(`3rd log ${val}`);
  });
}, 3000); */

/*
    using a Promise built-in by JavaScript
*/
const doWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
};

const doOtherWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Again");
  }, 1000);
};

const doAllWork = async (resolve, reject) => {
  const someText = new Promise(doWork);
  const text1 = await someText;
  console.log(text1);

  const otherText = new Promise(doOtherWork);
  const text2 = await otherText;
  console.log(text2);
};

doAllWork();
console.log("Done, this will print first because of global execution context");
