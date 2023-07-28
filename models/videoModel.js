const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoID: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
