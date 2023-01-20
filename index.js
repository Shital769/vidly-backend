const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

// import * as winston from 'winston';
// import winston from "winston";
// import express from "express";
// import config from "config";


require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

// const p = Promise.reject(new Error("Something failed miserably"));
// p.then(() => console.log("Done"));

// throw new Error("Could not get genres.");

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
