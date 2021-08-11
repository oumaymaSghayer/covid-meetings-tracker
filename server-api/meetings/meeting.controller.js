const express = require("express");
const router = express.Router();
const meetingService = require("./meeting.service");

// routes
router.get("/", getAllMeetings);
router.get("/:id", getMeetingsByUserId);
router.post("/create", createMeeting);

module.exports = router;

function getAllMeetings(req, res, next) {
  meetingService
    .getAll()
    .then((meetings) => res.json(meetings))
    .catch((err) => next(err));
}

function createMeeting(req, res, next) {
  console.log("adding meeting");
  meetingService
    .create(req.body)
    .then(() => res.json({ message: "Meeting successfully Created !" }))
    .catch((err) => next(err));
}

function getMeetingsByUserId(req, res, next) {
  meetingService
    .getByUserId(req.params.id, req.body)
    .then((meetings) => res.json(meetings))
    .catch((err) => next(err));
}
