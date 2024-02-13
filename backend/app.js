require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
const _dirname = path.dirname("")
const buildpath = path.join(_dirname,"../frontend/dist")
app.use(express.static(buildpath));
app.use(cors());


mongoose
  .connect("mongodb+srv://taniyajamwal97:qUEXQzuGH5p36WxG@cluster0.riyehsz.mongodb.net/?retryWrites=true&w=majority");
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));


