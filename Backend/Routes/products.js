const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../Controllers/products");

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").delete(deleteProduct).put(updateProduct);

module.exports = router;
