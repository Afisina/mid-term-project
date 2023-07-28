const userService = require("../services/userService");

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const { username, avatar } = req.body;
    const userData = { username, avatar };

    // Create a new user using the userService
    const newUser = await userService.createUser(userData);

    // Respond with the newly created user
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to create user." });
  }
};

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users using the userService
    const users = await userService.getAllUsers();

    // Respond with the list of users
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch users." });
  }
};

// Controller function to get a user by userID
const getUserByID = async (req, res) => {
  try {
    const { userID } = req.params;

    // Find the user by userID using the userService
    const user = await userService.getUserByID(userID);

    // Respond with the user
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to fetch user." });
  }
};

// Controller function to update the username of a user
const updateUsername = async (req, res) => {
  try {
    const { userID } = req.params;
    const { newUsername } = req.body;

    // Update the username for the user identified by userID using the userService
    const updatedUser = await userService.updateUsername(userID, newUsername);

    // Respond with the updated user
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to update username." });
  }
};

// Controller function to update the avatar of a user
const updateAvatar = async (req, res) => {
  try {
    const { userID } = req.params;
    const { newAvatar } = req.body;

    // Update the avatar for the user identified by userID using the userService
    const updatedUser = await userService.updateAvatar(userID, newAvatar);

    // Respond with the updated user
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Failed to update avatar." });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  updateUsername,
  updateAvatar,
};
