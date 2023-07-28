const User = require("../models/userModel");

// Service function to create a new user
const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create user.");
  }
};

// Service function to fetch all users
const getAllUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users.");
  }
};

// Service function to fetch a user by userID
const getUserByID = async (userID) => {
  try {
    const user = await User.findById(userID);
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Service function to update the username of a user
const updateUsername = async (userID, newUsername) => {
  try {
    const user = await User.findByIdAndUpdate(userID, { username: newUsername }, { new: true });
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update username.");
  }
};

// Service function to update the avatar of a user
const updateAvatar = async (userID, newAvatar) => {
  try {
    const user = await User.findByIdAndUpdate(userID, { avatar: newAvatar }, { new: true });
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update avatar.");
  }
};

// Service function to fetch a user by username
const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user by username.");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  updateUsername,
  updateAvatar,
  getUserByUsername,
};
