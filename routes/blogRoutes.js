const express = require("express");
const validateToken = require("../middleware/validateToken");
const {
  blogPost,
  blogGet,
  getBlogbyid,
  blogUpdate,
  blogDelete,
} = require("../controller/blogController");
const {
  validateBlog,
  blogValidation,
} = require("../validator/BlogV/blogValidator");
const router = express.Router();

router.use(validateToken);
router.route("/").post(validateBlog, blogValidation, blogPost);

router.route("/all").get(blogGet);

router.route("/").get(getBlogbyid);

router.route("/:id").put(blogUpdate);

router.route("/:id").delete(blogDelete);

module.exports = router;
