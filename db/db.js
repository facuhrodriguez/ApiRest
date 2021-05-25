const environmentVariables = require("../environment/environment").env;

const connection = await mongoose.connect(environmentVariables.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
