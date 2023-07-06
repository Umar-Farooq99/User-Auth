const express = require("express");
const { sequelize } = require("./models");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen({ port: 5000 }, async () => {
  console.log(`server up on http://localhost:5000`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
