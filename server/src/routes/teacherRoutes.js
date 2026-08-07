const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controller/teacherController");

router.post("/", addTeacher);
router.get("/", getTeachers);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

module.exports = router;