const express = require("express");
const {
  addToCart,
  updateCart,
  getUserCart,
} = require("../controllers/cartController");
const authUser = require("../middleware/auth");

const cartRouter = express.Router();

cartRouter.get("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.put("/update", authUser, updateCart);

module.exports = cartRouter;
