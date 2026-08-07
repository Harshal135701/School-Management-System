const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  homeworkValidation,
  validate,
} = require("../validators/homeworkValidator");

const {
  addHomework,
  getHomework,
  getPublishedHomework,
  updateHomework,
  publishHomework,
  deleteHomework,
} = require("../controller/homeworkController");


router.get("/parent", getPublishedHomework);
router.get("/", getHomework);
router.post(
  "/",
  upload.single("attachment"),
  homeworkValidation,
  validate,
  addHomework
);

router.put(
  "/:id",
  upload.single("attachment"),
  homeworkValidation,
  validate,
  updateHomework
);

router.put("/:id/publish", publishHomework);

router.delete("/:id", deleteHomework);

module.exports = router;