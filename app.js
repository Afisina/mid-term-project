require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});

const app = express();

// Middleware to parse JSON payloads
app.use(bodyParser.json());
app.use(express.json());

// Import and use the routes
const videoRoutes = require("./routes/videoRoutes");
const productRoutes = require("./routes/productRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/video", videoRoutes);
app.use("/api/product", productRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/user", userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
