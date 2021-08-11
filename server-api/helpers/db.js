const config = require("./../config.json");
const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const User = require("../users/user.model");
const Meeting = require("../meetings/meeting.model");

try {
  console.log("connecting to mongo");
  mongoose.connect(
    process.env.MONGODB_URI || config.connectionString,
    connectionOptions
  );
} catch (e) {
  console.log(e);
}

mongoose.Promise = global.Promise;

module.exports = {
  User,
  Meeting,
};
