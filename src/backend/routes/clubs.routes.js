const express = require("express");
const router = express.Router();

const {
  fetchAllClubs, 
  fetchClubById, 
  createClub , 
  deleteClubById, 
} = require("../controllers/clubs.controllers");

router.route("/").get(fetchAllClubs);
router.route("/:id").get(fetchClubById);
router.route("/create").post(createClub);
router.route("/delete/:id").delete(deleteClubById);

module.exports = router;
