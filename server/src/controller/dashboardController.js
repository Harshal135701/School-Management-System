const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Homework = require("../models/Homework");

const getDashboard = async (req, res) => {
  try {
    const totalStudents = await Student.count();
    const totalTeachers = await Teacher.count();
    const totalHomework = await Homework.count();

    res.json({
      totalStudents,
      totalTeachers,
      totalHomework,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getDashboard };