const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const { BadRequestError, NotFoundError } = require("../utils/errors");
router.get("/", (req, res, next) => {
  try {
    console.log("Getting products...");
    const productList = Store.returnProducts();
    res.status(200).json({ products: productList });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:productId", (req, res, next) => {
  try {
    const productId = req.params.productId;
    console.log(`Getting product ${productId} by id...`);
    const selectedProduct = Store.getProductById(productId);
    console.log(selectedProduct);
    res.status(200).json(selectedProduct);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
