const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// api routes
app.use("/users", require("./users/user.controller"));

app.use("/meetings", require("./meetings/meeting.controller"));

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
