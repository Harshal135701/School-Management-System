const { Op } = require("sequelize");
const Student = require("../models/Student");

const addStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      class: studentClass,
      section,
      parentName,
      parentMobile,
      address,
    } = req.body;

    const admissionNumber = "ADM" + Date.now();

    const student = await Student.create({
      admissionNumber,
      firstName,
      lastName,
      class: studentClass,
      section,
      parentName,
      parentMobile,
      address,
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const { search } = req.query;

    let where = {};

    if (search) {
      where = {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${search}%` } },
          { lastName: { [Op.iLike]: `%${search}%` } },
          { admissionNumber: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }

    const students = await Student.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });

    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    await student.update(req.body);

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    await student.destroy();

    res.json({ message: "Student Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};