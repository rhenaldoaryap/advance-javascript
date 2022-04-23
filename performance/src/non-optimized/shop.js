import { initProducts } from "./product-management";

function addProduct(event) {
  import("./product-management.js").then((module) => {
    module.addProduct();
  });
}

const addProductForm = document.getElementById("new-product");

initProducts();

addProductForm.addEventListener("submit", addProduct);
