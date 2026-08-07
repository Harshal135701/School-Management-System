const { body, validationResult } = require("express-validator");

const studentValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First Name is required"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last Name is required"),

  body("class")
    .trim()
    .notEmpty()
    .withMessage("Class is required"),

  body("section")
    .trim()
    .notEmpty()
    .withMessage("Section is required"),

  body("parentName")
    .trim()
    .notEmpty()
    .withMessage("Parent Name is required"),

  body("parentMobile")
    .trim()
    .notEmpty()
    .withMessage("Parent Mobile is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Parent Mobile must be 10 digits")
    .isNumeric()
    .withMessage("Parent Mobile must contain only numbers"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required"),
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
  studentValidation,
  validate,
};