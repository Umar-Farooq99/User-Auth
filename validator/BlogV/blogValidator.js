const { check, validationResult } = require("express-validator");
exports.validateBlog = [
  check("title").trim().not().isEmpty().withMessage("plz mention title"),
  check("body").trim().not().isEmpty().withMessage("write some words in Blog"),
  check("author").trim(),
];

exports.blogValidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};
