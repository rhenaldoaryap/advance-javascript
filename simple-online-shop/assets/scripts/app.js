class Product {
  /*
    below called CLASS FIELD
    title = "DEFAULT";
    imageUrl;
    price;
    description;
  */

  constructor(title, image, price, description) {
    // below called CLASS PROPERTY
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `
      <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
    `;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
    `;
    cartEl.className = "cart";
    // create a new tag element with this keyword
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  /* product parameter below is expecting to be products array
  inside of ProductList Class */
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    // using bind method to reffering this to the same method (addToCart()) we looking to
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://picsum.photos/200?random=1",
      29.0,
      "A soft pillow"
    ),
    new Product(
      "A Bed",
      "https://picsum.photos/200?random=2",
      301.2,
      "An outstanding bed"
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    /* render all products to be single product
    this.products refers to the ProductList class
    and then access to the products array */
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();

    const productList = new ProductList();
    const productListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
