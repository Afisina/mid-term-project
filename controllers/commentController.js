const commentService = require("../services/commentService");
const userService = require("../services/userService");

// Controller function to get comments by videoID
const getCommentsByVideoID = async (req, res) => {
  try {
    const { videoID } = req.params;

    // Find comments by videoID using the commentService
    const comments = await commentService.getCommentsByVideoID(videoID);

    // Respond with the comments
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch comments." });
  }
};

// Controller function to submit a new comment
const submitComment = async (req, res) => {
  try {
    const { videoID, username, comment } = req.body;

    // Fetch the user by username using the userService
    const user = await userService.getUserByUsername(username);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Create a new comment with the user's ID
    const commentData = { videoID, user: user._id, comment };
    const newComment = await commentService.submitComment(commentData);

    // Respond with the newly created comment
    res.json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to submit comment." });
  }
};

module.exports = {
  getCommentsByVideoID,
  submitComment,
};
