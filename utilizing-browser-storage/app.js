const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

/*
playing around with localstorage

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

*/

storeBtn.addEventListener("click", () => {
  const userId = "uid123";
  const user = { name: "Rhenaldo", age: 23 };
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((singleDataOfCookie) => {
    return singleDataOfCookie.trim();
  });
  console.log(data[1].split("=")[1]); // user value -> { name: "Rhenaldo", age: 23 }
});
