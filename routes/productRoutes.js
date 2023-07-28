const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create a new product
router.post("/create", productController.createProduct);

// Get all products
router.get("/list", productController.getAllProducts);

// Get products by videoID
router.get("/:videoID", productController.getProductsByVideoID);

module.exports = router;
