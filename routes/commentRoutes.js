const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Get comments by videoID
router.get("/:videoID", commentController.getCommentsByVideoID);

// Submit a new comment
router.post("/submit-comment", commentController.submitComment);

module.exports = router;
