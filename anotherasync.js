/*
  asynchronous to see location
*/

const buttonElement = document.querySelector("button");
const paragraphElement = document.querySelector("p");

function trackUserHandler() {
  /*
  getCurrentPosition yield a new function
  we can create another function (which is become a method)
  and we passing there.
  Or we can use anonymous function inside of it.
  in this case we use anonymous function and pass posData as a new function
  */
  navigator.geolocation.getCurrentPosition(
    (postData) => {
      console.log(postData);
    },
    (error) => {
      console.log(error);
    }
  );
}

buttonElement.addEventListener("click", trackUserHandler);
