const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routes = require("./routes");
const config = require("./config");
const db = require("./class/db");

const app = express();
const port = config.port;
const log = config.log();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./static/")));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", routes());

// DATABASE
// db.connect(config)
//   .then(() => {
//     log.info(`Connected to MongoDB[${config.mode}]`);
//   })
//   .catch((err) => {
//     log.fatal(err);
//   });

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
