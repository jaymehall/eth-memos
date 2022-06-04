const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config();
const apiRoutes = require("./routes/api-routes.js");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Serve up static assets
  app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

mongoose.connect(process.env.JAWSDB_MARIA_URL);

mongoose.connection.on("error", (err) =>
  console.log(`error in mongoose connection ${err}`)
);

mongoose.connection.once("open", () => {
  console.log("mongoose connected!");
  app.listen(PORT, () => {
    console.log(`App running on: http://www.localhost:${PORT}`);
  });
});
