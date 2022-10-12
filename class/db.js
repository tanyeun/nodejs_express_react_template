const mongoose = require("mongoose");

module.exports.connect = async (config) => {
  if (config.mode == "local") {
    mongoose.connect(config.mongoUrl);
  } else {
    mongoose.connect(config.database.dsn, { useNewUrlParser: true });
  }
};
