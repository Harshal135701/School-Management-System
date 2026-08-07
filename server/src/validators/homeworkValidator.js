const { body, validationResult } = require("express-validator");

const homeworkValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Homework title is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required"),

  body("class")
    .trim()
    .notEmpty()
    .withMessage("Class is required"),

  body("dueDate")
    .notEmpty()
    .withMessage("Due Date is required"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  homeworkValidation,
  validate,
};