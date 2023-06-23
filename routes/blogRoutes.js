const express = require("express");
const validateToken = require("../middleware/validateToken")
const {
  blogPost,
  blogGet,
  getBlogbyid,
  blogUpdate,
  blogDelete,
} = require("../controller/blogController");
const router = express.Router();

router.use(validateToken);
router.route("/").post(blogPost);

router.route("/all").get(blogGet);

router.route("/:user_id").get(getBlogbyid);

router.route("/:user_id").put(blogUpdate);

router.route("/:user_id").delete(blogDelete);

module.exports = router;
