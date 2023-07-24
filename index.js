import express from "express";
import db from "./src/models";
import * as dotenv from "dotenv";
dotenv.config();
import UserController from "./src/controllers/user";

const app = express();
const port = 3333;

app.use(express.json());

app.post("/", UserController.create);
app.post("/login", UserController.login);

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.log("Error running app: ", error);
  }
});
