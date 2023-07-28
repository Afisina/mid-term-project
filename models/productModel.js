const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true },
  videoID: { type: String, required: true }, // Reference to the Video model's videoID
  photoProduct: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
