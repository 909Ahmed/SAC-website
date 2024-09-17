const express = require("express");
const router = express.Router();

// Import other router files
const userRoutes = require("./users.routes");
const threadRoutes = require("./threads.routes");
const announcementRoutes = require("./announcements.routes");
const clubRoutes = require("./clubs.routes");
const baseRoutes = require("./base.routes");
const projectRoutes = require("./projects.routes");
const EventRoutes = require("./events.routes");
// const auth = require("./auth.routes");

// Use the routers
router.use("/announcements", announcementRoutes);
router.use("/clubs", clubRoutes);
router.use("/projects", projectRoutes);
router.use("/events", EventRoutes);
router.use("/base", baseRoutes);
router.use("/users", userRoutes);
router.use("/threads", threadRoutes);
// router.use("/auth", auth);

module.exports = router;
