const express = require("express");

const router = express.Router();

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  lowStockProducts
} = require("../controllers/productController");

router.post("/", addProduct);

router.get("/", getProducts);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/low-stock", lowStockProducts);

module.exports = router;