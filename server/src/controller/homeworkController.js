const Homework = require("../models/Homework");

const addHomework = async (req, res) => {
  try {
    const homework = await Homework.create({
      ...req.body,
      attachment: req.file ? req.file.filename : null,
    });

    res.status(201).json(homework);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHomework = async (req, res) => {
  const homework = await Homework.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.json(homework);
};

module.exports = {
  addHomework,
  getHomework,
};