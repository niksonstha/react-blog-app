import "dotenv/config";
import { connection } from "./db/connection.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

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
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// ? routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

// ? server start
app.listen(process.env.PORT, () => {
  console.log(`App is running is port ${process.env.PORT}`);
});
