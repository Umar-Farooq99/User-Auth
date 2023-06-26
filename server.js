const express = require("express");
const { sequelize } = require("./models");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen({ port: 5000 }, async () => {
  console.log(`server up on http://localhost:5000`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
