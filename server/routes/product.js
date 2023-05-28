const express = require("express");
const router = express.Router();

const {
  getProductById,
  getAllProductsByCategory,
  getCategories,
  getAllProductsBySubCategory,
  getProductsBySearch,
} = require("../controllers/product");

router.get("/products/search", getProductsBySearch);
router.get("/products/single/:id", getProductById);
router.get("/products/category/:category", getAllProductsByCategory);
router.get(
  "/products/category/:category/:sub_category",
  getAllProductsBySubCategory
);
router.get("/products", getCategories);

module.exports = router;
