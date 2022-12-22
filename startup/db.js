const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
     .set("strictQuery", true)
    .connect(db, {
      useUnifiedTopology: true,
      // bufferCommands: true,
      useNewUrlParser: true,
    })
    .then(() => console.log(`Connected to ${db}...`));
};
