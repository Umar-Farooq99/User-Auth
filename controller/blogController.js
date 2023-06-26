const { sequelize, Blog } = require("../models");
const { body } = require("express-validator");

const blogPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, body, author } = req.body;
    const createdBlog = await Blog.create({
      title,
      body,
      author,
      user_id: req.user.id,
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
    const getBlog = await Blog.findAll();
    res.status(200).json(getBlog);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
};

const getBlogbyid = async (req, res) => {
  try {
    const { user } = req;
    getBlog = await Blog.findAll({ where: { user_id: user.id } });
    res.status(200).json(getBlog);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server err" });
  }
};

const blogUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const { user } = req;
    const getblog = await Blog.findOne({ where: { id } });
    if (!getblog) {
      return res.status(404).send("Not Found");
    } else {
      res.status(200).json(getblog);
    }
    await Blog.update({ title, body }, { where: { user_id: user.id } });
    if (user_id !== user.id) {
      return res.status(401).json({ error: "unathorized access" });
    } else {
      res.status(200).send(`updated with user iD ${user_id}`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};

const blogDelete = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const getblog = await Blog.findOne({ where: { id } });
  if (!getblog) {
    return res.status(404).json({ message: "Not Found" });
  } else {
    res.status(200).json(getblog);
  }

  await Blog.destroy({ where: { user_id: user.id } });
  if (user_id !== user.id) {
    res.status(401).send("unauthorized access");
  } else {
    res.status(200).json({ message: "DELETED" });
  }
};

module.exports = {
  blogPost,
  blogGet,
  blogPost,
  getBlogbyid,
  blogUpdate,
  blogDelete,
};
