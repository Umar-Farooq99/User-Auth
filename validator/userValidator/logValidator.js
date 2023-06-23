const { check ,validationResult } = require("express-validator");
exports.validateUserSignIn = [check("email").normalizeEmail().isEmail().withMessage("Invalid email"),
check("password")
  .trim()
  .not()
  .isEmpty().withMessage('password is Empty')
  .isLength({ min: 3, max: 20 })
  .withMessage("password must be within 8 to 20 character"),
];

exports.logValidation = (req,res,next)=>{
    const result = validationResult(req).array();
    if(!result.length) return next();

    const error = result[0].msg;
    res.json({success:false,message:error})
};