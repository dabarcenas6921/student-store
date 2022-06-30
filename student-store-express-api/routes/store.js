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
    res.status(200).json(selectedProduct);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    //Getting userinfo and shopping cart info from incoming order.
    const order = req.body;
    const userInfo = req.body.user;
    const shoppingCart = req.body.shoppingCart;
    const orderId = req.body.orderId;
    const total = req.body.total;
    const createdAt = req.body.createdAt;

    //ORDER OBJECT FORMAT:

    //   {
    //     "orderId": 1,
    //     "user":{"name": "david", "email": "david@gmail.com"},
    //     "shoppingCart":{"1" : "15", "2":"16"},
    //     "total" : 15,
    //     "createdAt" : "2022-06-30"
    // }

    console.log("Got user info:", userInfo);
    console.log("Got shopping cart:", shoppingCart);

    //check if either userinfo or shoppingcart are empty in future...

    Store.createOrder(order);
    const purchaseList = Store.returnPurchases();
    res.status(201).json({ purchases: purchaseList });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
