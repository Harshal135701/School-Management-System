const Teacher = require("../models/Teacher");

const addTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      employeeId: "EMP" + Date.now(),
      ...req.body,
    });

    res.status(201).json(teacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);

    if (!teacher)
      return res.status(404).json({ message: "Teacher not found" });

    await teacher.update(req.body);

    res.json(teacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);

    if (!teacher)
      return res.status(404).json({ message: "Teacher not found" });

    await teacher.destroy();

    res.json({ message: "Teacher Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};