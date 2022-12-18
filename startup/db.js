const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose
    .set("strictQuery", true)
    .connect("mongodb://localhost/vidly", {
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."));
};
