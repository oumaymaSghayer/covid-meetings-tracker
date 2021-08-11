const mongoose = require("mongoose");
const User = require("../users/user.model").schema;
const Schema = mongoose.Schema;
const schema = new Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  place: { type: [Number], required: true },
  person: User,
});

module.exports = mongoose.model("Meeting", schema);
