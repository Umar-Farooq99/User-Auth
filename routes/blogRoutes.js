const express = require("express");
const validateToken = require("../middleware/validateToken");
const {
  blogPost,
  getBlog,
  blogUpdate,
  blogDelete,
  getAllBlog,
} = require("../controller/blogController");
const {
  validateBlog,
  blogValidation,
} = require("../validator/BlogV/blogValidator");
const restrict = require("../middleware/permission");
const router = express.Router();

router.use(validateToken);
router.route("/").post(validateBlog, blogValidation, blogPost);

router.route("/all").get(getAllBlog);

router.route("/").get(getBlog); //change the name......

router.route("/:id").patch(blogUpdate);

router.route("/:id").delete(blogDelete);

module.exports = router;
