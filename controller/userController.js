const bcrypt = require("bcrypt");
const { sequelize, User } = require("../models");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const alreadyExist = await User.findOne({ where: { email } });
    if (alreadyExist) {
      return res.status(400).send("Already registered!");
    }
    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    const regUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role,
    });
    res.status(200).json(regUser);
  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2h" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

const userProfile = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};
const singleUserprofile = async (req, res) => {
  res.status(200).json(req.user);
};
module.exports = { userRegister, userLogin, userProfile, singleUserprofile };
