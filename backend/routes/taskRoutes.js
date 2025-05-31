const express = require("express");
const {protect, adminOnly} = require("../middleware/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTasksById, createTask, updateTask, deleteTsk, updateTaskStatus, updateTaskCheckList, deleteTask } = require("../controllers/taskController");

const router = express.Router();

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks(Admin: all, User:assigned)
router.get("/:id", protect, getTasksById); // Get task by id
router.post("/", protect, adminOnly, createTask); // Create a task(Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task(Admin only)
router.put("/:id/status", protect, updateTaskStatus); // update task status
router.put("/:id/todo", protect, updateTaskCheckList); // update task checklist

module.exports = router;