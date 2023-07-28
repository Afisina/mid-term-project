const Video = require("../models/videoModel");

// Service function to create a new video
const createVideo = async (videoData) => {
  try {
    const newVideo = await Video.create(videoData);
    return newVideo;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create video.");
  }
};

// Service function to fetch all videos
const getAllVideos = async () => {
  try {
    const videos = await Video.find({});
    return videos;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch videos.");
  }
};

// Service function to fetch a video by videoID
const getVideoByID = async (videoID) => {
  try {
    const video = await Video.findOne({ videoID });
    if (!video) {
      throw new Error("Video not found.");
    }
    return video;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  getVideoByID,
};
