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


    await homework.update({
      ...req.body,
      attachment: req.file ? req.file.filename : homework.attachment,
    });


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

const getPublishedHomework = async (req, res) => {
  try {
    const { search, subject, class: studentClass } = req.query;

    const where = {
      published: true,
    };

    if (search) {
      where.title = {
        [require("sequelize").Op.iLike]: `%${search}%`,
      };
    }

    if (subject) {
      where.subject = subject;
    }

    if (studentClass) {
      where.class = studentClass;
    }

    const homework = await Homework.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });

    res.json(homework);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  publishHomework,
  addHomework,
  getHomework,
  getPublishedHomework,
  updateHomework,
  deleteHomework,
};