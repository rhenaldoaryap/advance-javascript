const buttons = document.querySelectorAll("button");

const buttonClickHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("this click and printed to console");
};

/* another way to use eventlistener
button.onclick = buttonClickHandler;
button.onclick = anotherButtonClickHandler; */

/*
    result:
    this click and printed to console
*/

/* using this approach has one major disadvantage
we couldn't use another onclick event anymore
because it will count as override, not count
as double eventlistener */

buttons.forEach((button) => {
  button.addEventListener("click", buttonClickHandler);
});

/* setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000); */

const formElement = document.querySelector("form");

formElement.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});
