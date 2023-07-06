const { where } = require("sequelize");
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

const getAllBlog = async (req, res) => {
  try {
    const getBlog = await Blog.findAll();
    res.status(200).json(getBlog);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
};

const getBlog = async (req, res) => {
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
    if (!getblog) return res.status(404).send("Not Found");

    if (getBlog.user_id !== user.id)
      res.status(401).send("unauthorized access");
    await Blog.update({ title, body }, { where: { user_id: user.id } });

    res.status(200).json(`updated with user iD `);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};

const blogDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req;
    const getBlog = await Blog.findOne({ where: { id } });
    if (!getBlog) return res.status(404).json({ message: "Not Found" });

    if (getBlog.user_id !== user.id || user.role === "admin")
      res.status(401).send("unauthorized access");
    await Blog.destroy({ where: { user_id: user.id } });

    res.status(200).json({ message: "DELETED" });
  } catch (err) {}
};

module.exports = {
  getAllBlog,
  blogPost,
  getBlog,
  blogUpdate,
  blogDelete,
};
