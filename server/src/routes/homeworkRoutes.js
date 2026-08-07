const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  addHomework,
  getHomework,
  updateHomework,
  deleteHomework
} = require("../controller/homeworkController");

router.post("/",upload.single("attachment"), addHomework);
 

router.get("/",getHomework);

router.put("/:id", updateHomework);

router.delete("/:id",deleteHomework);

module.exports = router;