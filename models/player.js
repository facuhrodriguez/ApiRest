var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: String,
  surname: String,
  nickName: String,
  position: String,
  age: Number,
  country: String,
  team: {
    name: String,
    nickName: String,
    place: {
      city: String,
      country: String,
    },
  },
  value: Number,
});

playerSchema.set("collection", "player");
const playerSch = mongoose.model("Player", playerSchema);

module.exports = {
  playerSch,
};
