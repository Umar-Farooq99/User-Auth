const express = require("express");
const validateToken = require("../middleware/validateToken");
const {
  userLogin,
  userRegister,
  userProfile,
  singleUserprofile,
} = require("../controller/userController");
const { validateUserSignUp, userValidation } = require("../validator/userValidator/regValidator");
const { validateUserSignIn, logValidation } = require("../validator/userValidator/logValidator");

const router = express.Router();

router.post("/register",validateUserSignUp,userValidation,userRegister);

router.post("/login",validateUserSignIn,logValidation,userLogin);

router.get("/all",userProfile);

router.get("/current",validateToken,singleUserprofile);

module.exports = router;
