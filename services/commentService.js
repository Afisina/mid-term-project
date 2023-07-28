const Comment = require("../models/commentModel");

// Service function to get comments by videoID
const getCommentsByVideoID = async (videoID) => {
  try {
    const comments = await Comment.find({ videoID });
    return comments;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch comments.");
  }
};

// Service function to submit a new comment
const submitComment = async (commentData) => {
  try {
    const newComment = await Comment.create(commentData);
    return newComment;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to submit comment.");
  }
};

module.exports = {
  getCommentsByVideoID,
  submitComment,
};
