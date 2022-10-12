require("dotenv").config();
const bunyan = require("bunyan");

const path = require("path");
const current_mode = "local";
const project_name = "Hello World";
const web_port = 8080;
const db_port = 27017;
const db_name = "helloworld";

const loggers = {
  production: () => bunyan.createLogger({ name: "production", level: "debug" }),
  local: () => bunyan.createLogger({ name: "local", level: "debug" }),
};

const mode = {
  production: {
    sitename: project_name + " [Production]",
    mode: "production",
    port: web_port,
    log: loggers.production,
    mongoUrl: process.env.PRODUCTION_DB_DSN,
    database: {
      dsn: process.env.PRODUCTION_DB_DSN,
    },
  },
  local: {
    sitename: project_name + "  [Local]",
    mode: "local",
    port: web_port,
    url: "localhost:" + web_port,
    log: loggers.local,
    mongoUrl: "mongodb://localhost:" + db_port + "/" + db_name,
  },
};

module.exports = mode[current_mode];
