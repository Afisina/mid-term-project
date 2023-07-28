const productService = require("../services/productService");

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const { productID, videoID, photoProduct, link, title, price } = req.body;
    const productData = { productID, videoID, photoProduct, link, title, price };

    // Create a new product using the productService
    const newProduct = await productService.createProduct(productData);

    // Respond with the newly created product
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to create product." });
  }
};

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    // Fetch all products using the productService
    const products = await productService.getAllProducts();

    // Respond with the list of products
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch products." });
  }
};

// Controller function to get products by videoID
const getProductsByVideoID = async (req, res) => {
  try {
    const { videoID } = req.params;

    // Find products by videoID using the productService
    const products = await productService.getProductsByVideoID(videoID);

    // Respond with the products
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch products." });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByVideoID,
};
