/*
  asynchronous to see location
*/

const buttonElement = document.querySelector("button");
const paragraphElement = document.querySelector("p");

const getPosition = (option) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      option
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // we can pass any data here if our promise is resolve
      resolve("Done");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  /*
  getCurrentPosition yield a new function
  we can create another function (which is become a method)
  and we passing there.
  Or we can use anonymous function inside of it.
  in this case we use anonymous function and pass posData as a new function
  */
  /* let positData; */

  /*
    error handling while using async-await is using try-catch (synchronous code)
  */
  let postData;
  let timerData;
  try {
    postData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, postData);
  /* .then((positionData) => {
      positData = positionData;
      return setTimer(2000);
    })
    .catch((error) => {
      console.log(error);
      return "Here we goo..";
    })
    .then((data) => {
      console.log(data, positData);
    }); */
  /*
      setTimeout(() => {
        console.log(postData);
      }, 2000);
      changing it with setTimer function above
      */
  /* setTimer(1000).then(() => {
    console.log("Timer is done");
  });
  console.log("Getting current position"); */
}

buttonElement.addEventListener("click", trackUserHandler);

/* Promise.race([getPosition(), setTimer(1000)]).then((theFastestPromises) => {
  console.log(theFastestPromises);
});

Promise.all([getPosition(), setTimer(1000)]).then(
  (yieldCombineDataOfPromises) => {
    console.log(yieldCombineDataOfPromises);
  }
); */

Promise.allSettled([getPosition(), setTimer(1000)]).then(
  (yieldDataOfObject) => {
    console.log(yieldDataOfObject);
  }
);
