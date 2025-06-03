const Task = require("../models/Task");
const User = require("../models/User");
const excelJS = require("exceljs");

//@desc Export all tasks as an Excel file
//@route Get /api/reports/export/tasks
//@access Private (Admin)

const exportTasksReport = async (req, res) => {
    try {
        
    } catch (error) {
        res
        .status(500)
        .json({ message: "Error exporting tasks", error: error.message});
    }
};

//@desc Export user-task report as na Excel file
//@route GET /api/reports/export/users
//@access Private (Admin)

const exportUsersReport = async (params) => {
    
};

module.exports = {
    exportTasksReport,
    exportUsersReport
};