const express = require("express");
const router = express.Router();

const {createBase_profile , createBulkBase_profiles , updateBase_profile, deletebase_profileById} = require("../controllers/base_profiles.controllers");

router.route("/").post(createBase_profile);
router.route("/:id").get(deletebase_profileById);

module.exports = router;