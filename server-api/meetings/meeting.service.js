const config = require("../config.json");
const db = require("../helpers/db");

const Meeting = db.Meeting;

module.exports = {
  getAll,
  create,
  getByUserId,
};

async function getAll() {
  return await Meeting.find();
}

async function create(meetingParam) {
  const meeting = new Meeting(meetingParam);
  await meeting.save();
}

async function getByUserId(userId) {
  return await Meeting.find({ userId: userId });
}
