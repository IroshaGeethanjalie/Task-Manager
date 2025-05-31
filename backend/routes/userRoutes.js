const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getUsers, getUserById } = require("../controllers/userController");

const router = express.Router();

// user management routes
router.get("/", protect, adminOnly, getUsers); // get all users(Admin only)
router.get("/:id", protect, getUserById); //get a specific user
router.delete("/:id", protect, adminOnly); // Delete user(Admin only)

module.exports = router;