const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  videoID: { type: String, required: true }, // Reference to the Video model's videoID
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
