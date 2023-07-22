import express from "express";
import db from "./src/models";
import UserController from "./src/controllers/user";

const app = express();
const port = 3333;

app.post("/", UserController.create);

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.log("Error running app: ", error);
  }
});