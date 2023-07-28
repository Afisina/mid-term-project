const videoService = require("../services/videoService");

// Controller function to create a new video
const createVideo = async (req, res) => {
  try {
    const { videoID, thumbnailUrl, title, description } = req.body;
    const videoData = { videoID, thumbnailUrl, title, description };

    // Create a new video using the videoService
    const newVideo = await videoService.createVideo(videoData);

    // Respond with the newly created video
    res.json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to create video." });
  }
};

// Controller function to get all videos
const getAllVideos = async (req, res) => {
  try {
    // Fetch all videos using the videoService
    const videos = await videoService.getAllVideos();

    // Respond with the list of videos
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch videos." });
  }
};

// Controller function to get a video by videoID
const getVideoByID = async (req, res) => {
  try {
    const { videoID } = req.params;

    // Find the video by videoID using the videoService
    const video = await videoService.getVideoByID(videoID);

    // Respond with the video
    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch video." });
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  getVideoByID,
};
