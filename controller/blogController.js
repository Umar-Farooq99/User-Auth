const { where } = require("sequelize");
const { sequelize, Blog } = require("../models");
const { body } = require("express-validator");

const blogPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, body, author } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: "title and body compulsory" });
    }
    const createdBlog = await Blog.create({
      title,
      body,
      author,
      user_id: req.user.user.id,
    });
    res.status(200).json(createdBlog);
  } catch (err) {
    console.log(err);
    //console.log("Err",err);
    res.status(500).json({ message: "server error" });
  }
};

const blogGet = async (req, res) => {
  try {
    const { user_id } = req.user;
    const getBlog = await Blog.findAll();
    res.status(200).json(getBlog);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
};

const getBlogbyid = async (req, res) => {
  try {
    const { user_id } = req.params

    getBlog = await Blog.findOne({ where: { user_id} });
    if ( Blog.user_id !== req.user.user.id) {
      return res.status(400).send("Not Found NO post yet");
    } else {
      res.status(200).json(getBlog);
     }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server err" });
  }
};

const blogUpdate = async (req, res) => { 
  try {
    const { user_id } = req.params;
    const { title, user } = req.body;
    console.log("user",user)

    await Blog.update({ title, body }, { where: { user_id } });
    console.log(user_id);
    //console.log(blogUp)
    res.status(200).send(`updated with user iD ${user_id}`);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
};

const blogDelete = async (req, res) => {
  const { user_id } = req.user
  await Blog.destroy({ where: {user_id} });
  res.status(200).json({ message: "DELETED" }); 
};

module.exports = {
  blogPost,
  blogGet,
  blogPost,
  getBlogbyid,
  blogUpdate,
  blogDelete,
};
