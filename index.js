const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging");
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

// const p = Promise.reject(new Error("Something failed miserably"));
// p.then(() => console.log("Done"));

// throw new Error("Could not get genres.");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
