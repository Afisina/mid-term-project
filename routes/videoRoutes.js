const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

// Create a new video
router.post("/create", videoController.createVideo);

// Get all videos
router.get("/list", videoController.getAllVideos);

// Get a video by videoID
router.get("/:videoID", videoController.getVideoByID);

module.exports = router;
