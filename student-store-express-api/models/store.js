const { storage } = require("../data/storage");

const { BadRequestError } = require("../utils/errors");

class Store {
  static returnProducts() {
    return storage.get("products");
  }

  static getProductById(id) {
    const products = storage.get("products");
    const results = products.find((product) => product.id === id);
    return results;
  }
}

module.exports = Store;
