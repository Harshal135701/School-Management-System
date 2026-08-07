const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  addHomework,
  getHomework,
} = require("../controller/homeworkController");

router.post("/", upload.single("attachment"), addHomework);

router.get("/", getHomework);

module.exports = router;