const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../Controller/ProductsController.js");

const {protect, adminOnly} = require("../Middleware/authMiddleware.js")
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", protect, adminOnly, createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router