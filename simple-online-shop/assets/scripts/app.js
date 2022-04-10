const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl: "https://picsum.photos/200?random=1",
      price: 29.0,
      description: "A soft pillow",
    },
    {
      title: "A Bed",
      imageUrl: "https://picsum.photos/200?random=2",
      price: 19.0,
      description: "An outstanding bed",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    // render all products to be single product
    for (const product of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
                <img src="${product.imageUrl}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\$${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
