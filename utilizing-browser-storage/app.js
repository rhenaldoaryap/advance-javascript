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

/*
playing around with cookies

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


 */

let db;

const dbRequest = indexedDB.open("storageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      title: "A first product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("ERROR");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }

  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add({
    id: "p2",
    title: "A second product",
    price: 228.99,
    tags: ["Expensive", "Luxury"],
  });
});

retrieveBtn.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productStore.get("p2");

  request.onsuccess = function () {
    console.log(request.result);
  };
});
