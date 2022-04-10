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

class ProductItem {
  /* product parameter below is expecting to be products array
  inside of ProductList Class, see line 67 */
  constructor(product) {
    this.product = product;
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
    const renderHook = document.getElementById("app");
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
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
