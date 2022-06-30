const { storage } = require("../data/storage");

const { BadRequestError } = require("../utils/errors");

class Store {
  static returnProducts() {
    return storage.get("products");
  }

  static getProductById(id) {
    const products = storage.get("products");
    const results = products.find((product) => product.id == id);
    return results;
  }

  static createOrder(order) {
    console.log("Creating order...");
    console.log("order contents:", order);

    const purchases = storage.get("purchases");
    purchases.push(order).write();
  }

  static returnPurchases() {
    return storage.get("purchases");
  }
}

module.exports = Store;
