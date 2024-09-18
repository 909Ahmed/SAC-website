const express = require("express");
const router = express.Router();
// const passport = require("../middlewares/googleauth");

const {
  fetchAllUsers,
  fetchUsersById,
  createUser,
  deleteUserById,
  AuthenticateUser
} = require("../controllers/users.controllers");

const {
  isLoggedIn, authRole, canViewUser
} = require("../controllers/auth.controllers");

//routes for fetching all users and user by id
router.route("/").get(fetchAllUsers, isLoggedIn, authRole(["Admin"]));
router.route("/:id").get(fetchUsersById, isLoggedIn, canViewUser);
router.route("/createUser").post(createUser);
router.route("/delete/:id").delete(deleteUserById, isLoggedIn);
router.route("/authenticate").post(AuthenticateUser);

module.exports = router;