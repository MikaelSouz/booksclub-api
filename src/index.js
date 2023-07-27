import express from "express";
import db from "./models";
import routes from "./routes";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.log("Error running app: ", error);
  }
});
