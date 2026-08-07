const express = require("express");
const router = express.Router();

const {
  studentValidation,
  validate,
} = require("../validators/studentValidator");

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");

router.get("/", getStudents);
router.post("/", studentValidation, validate, addStudent);
router.put("/:id", studentValidation, validate, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;