const express = require("express");
const router = express.Router();

const {
    getAllProjects,
    getSingleProject,
    postProject,
    deleteProject,
} = require("../controllers/projects.controllers");
const { isLoggedIn, authRole } = require("../controllers/auth.controllers");

// routes 
router.route("/").get(getAllProjects, isLoggedIn, authRole(["Admin", "Club Head", "Secretary"]));
router.route("/:id").get(getSingleProject, isLoggedIn, authRole(["Admin", "Club Head", "Secretary"]));
router.route("/postProject").post(postProject);
router.route("/delete/:id").delete(deleteProject, isLoggedIn, authRole(["Admin", "Club Head", "Secretary"]));

module.exports = router;