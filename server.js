const express = require("express");
const { sequelize } = require("./models");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.listen(port,()=>{
  console.log(`app listen on ${port}`)
})
