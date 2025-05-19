const express = require("express");
const {getCart, addToCart, removeFromCart} = require("../Controller/CartController");
const {protect} = require("../Middleware/authMiddleware.js");

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, removeFromCart);

module.exports = router
