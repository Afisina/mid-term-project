const Product = require("../models/productModel");

// Service function to create a new product
const createProduct = async (productData) => {
  try {
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create product.");
  }
};

// Service function to fetch all products
const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch products.");
  }
};

// Service function to fetch products by videoID
const getProductsByVideoID = async (videoID) => {
  try {
    const products = await Product.find({ videoID });
    return products;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch products.");
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByVideoID,
};
