import "dotenv/config";
import { connection } from "./db/connection.js";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

// ? Mongodb connection
connection()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log(error);
  });

// ? Middleware
app.use(express.json());
app.use(cors());

// ? routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/todo", todoRoutes);

// ? server start
app.listen(process.env.PORT, () => {
  console.log(`App is running is port ${process.env.PORT}`);
});
