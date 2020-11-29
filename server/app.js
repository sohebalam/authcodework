import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/userRoute.js";

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/API", {
    useMongoClient: true,
  });
} else {
  mongoose.connect("mongodb://localhost/API", {
    useMongoClient: true,
  });
}

const app = express();
app.use(cors());

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());

// Routes
app.use("/users", router);

// start server
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening at ${port}`);
