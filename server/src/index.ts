import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { development } from "./config";
import { UnAuthRoutes } from "./routes/unAuth";
import { AuthRoutes } from "./routes/auth";
import { authorizedMiddleware } from "./auth";

const app = express();

const { db, host, username, password } = development;

app.use(express.json());
app.use(cors());

app.use("/api", UnAuthRoutes);
app.use("/auth/api", authorizedMiddleware ,AuthRoutes)

app.listen(5000, () => {
  mongoose
    .connect(`mongodb+srv://${username}:${password}@${host}/${db}`)
    .then(() => {
      console.log("listening in the port 5000");
    })
    .catch((error) => {
      console.log("An error occured on mongo db connection", error);
    });
});
