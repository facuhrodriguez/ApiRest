const environmentVariables = require("../environment/environment");
const mongoose = require("mongoose");
const connection = async () => {
  await mongoose.connect(environmentVariables.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connection,
};
