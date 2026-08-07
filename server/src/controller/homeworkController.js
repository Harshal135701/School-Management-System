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

const updateHomework = async (req, res) => {

  try {

    const homework = await Homework.findByPk(req.params.id);


    if (!homework) {

      return res.status(404).json({
        message: "Homework not found"
      });

    }


    await homework.update(req.body);


    res.json(homework);


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



const deleteHomework = async (req, res) => {

  try {

    const homework = await Homework.findByPk(req.params.id);


    if (!homework) {

      return res.status(404).json({
        message: "Homework not found"
      });

    }


    await homework.destroy();


    res.json({
      message: "Homework deleted successfully"
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const publishHomework = async (req, res) => {
  try {

    const homework = await Homework.findByPk(req.params.id);

    if (!homework) {
      return res.status(404).json({
        message: "Homework not found"
      });
    }

    await homework.update({
      published: true
    });

    res.json({
      message: "Homework published successfully",
      homework
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  publishHomework,
  addHomework,
  getHomework,
  updateHomework,
  deleteHomework
};