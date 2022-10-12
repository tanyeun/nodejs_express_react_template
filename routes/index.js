const express = require("express");

const router = express.Router();
const index = "static/index.html";

// allow the module to get paramters
module.exports = () => {
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, index));
  });
  return router;
};
