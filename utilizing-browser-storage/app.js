const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const userId = "uid1234";
const user = {
  name: "Rhenaldo",
  age: 23,
  hobbies: ["Sports", "Coding"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrieveBtn.addEventListener("click", () => {
  const userLocalStorage = sessionStorage.getItem("uid");
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  userLocalStorage
    ? console.log(
        `Your local storage is ${userLocalStorage} and user data ${userData}`
      )
    : console.log("Could not find the id.");
});
