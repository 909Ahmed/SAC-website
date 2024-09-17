const express = require("express");
const router = express.Router();

const {
    getAllEvents,
    getSingleEvent,
    postEvent,
    deleteEvent,
} = require("../controllers/events.controllers");

router.route("/").get(getAllEvents);
router.route("/:id").get(getSingleEvent);
router.route("/create").post(postEvent);
router.route("/delete/:id").delete(deleteEvent);

module.exports = router;