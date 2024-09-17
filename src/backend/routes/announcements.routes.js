const express = require("express");
const router = express.Router();

const {
  fetchAllAnnouncements, 
  fetchAnnouncementById , 
  createAnnouncement , 
  deleteAnnouncementById , 
} = require("../controllers/announcements.controllers");

//routes for fetching all announcements and announcement by id
router.route("/").get(fetchAllAnnouncements);
router.route("/:id").get(fetchAnnouncementById);
router.route("/create").post(createAnnouncement);
router.route("/delete/:id").delete(deleteAnnouncementById);

module.exports = router;
