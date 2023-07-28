const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  avatar: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
