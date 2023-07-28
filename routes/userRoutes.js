const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create a new user
router.post("/create", userController.createUser);

// Get all users
router.get("/list", userController.getAllUsers);

// Get a user by userID
router.get("/:userID", userController.getUserByID);

// Update username for a user
router.put("/:userID/update-username", userController.updateUsername);

// Update avatar for a user
router.put("/:userID/update-avatar", userController.updateAvatar);

module.exports = router;
