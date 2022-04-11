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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasess, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClasess) {
      rootElement.className = cssClasess;
    }

    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) =>
        rootElement.setAttribute(attr.name, attr.value)
      );
    }

    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
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

  constructor(renderHookId) {
    /*
    super keyword very useful when we want to call and execute constructor
    from parent class
    */
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
    `;
    // create a new tag element with this keyword
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  /* product parameter below is expecting to be products array
  inside of ProductList Class */
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
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
  }
}

class ProductList extends Component {
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

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    /* render all products to be single product
    this.products refers to the ProductList class
    and then access to the products array */
    for (const product of this.products) {
      const productItem = new ProductItem(product, "prod-list");
      productItem.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();

    const productList = new ProductList("app");
    productList.render();
  }
}

class App {
  static cart;

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
