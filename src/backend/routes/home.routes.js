const express = require("express");
const router = express.Router();

// Import other router files
const userRoutes = require("./users.routes");
const threadRoutes = require("./threads.routes");
const announcementRoutes = require("./announcements.routes");
const clubRoutes = require("./clubs.routes");
const auth = require("./auth.routes");
const projectRoutes = require("./projects.routes");
const councilRoutes = require("./councils.routes");
const expenseRoutes = require("./expenses.routes");
const membershipsRoutes = require("./memberships.routes");
const commentRoutes = require("./comments.routes");

// Use the routers
router.use("/users", userRoutes);
router.use("/threads", threadRoutes);
router.use("/announcements", announcementRoutes);
router.use("/clubs", clubRoutes);
router.use("/auth", auth);
router.use("/projects", projectRoutes);
router.use("/councils", councilRoutes);
router.use("/expenses", expenseRoutes);
router.use("/memberships", membershipsRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
