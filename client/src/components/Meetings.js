import { useEffect, useState } from "react";
import "./../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeetings, filterMeetingsByName } from "./../redux/meetingSlice";
import MeetingListItem from "./MeetingListItem";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Meetings() {
  const history = useHistory();
  useEffect(() => {
    getMeetingsList();
    if (
      localStorage.getItem("user") == "" ||
      localStorage.getItem("user") == undefined
    ) {
      history.push("/");
      return;
    }
  }, []);
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meeting);
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (name.length == 1) {
      dispatch(getAllMeetings());
    }
    dispatch(filterMeetingsByName(name));
  };
  const getMeetingsList = () => {
    dispatch(getAllMeetings());
  };
  return (
    <div className="meetings-component">
      <div className="filter-container">
        <TextField
          id="outlined-basic"
          label="Looking for someone?"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          className="form-input search-input"
        />
      </div>
      <div className="meetings-container">
        {meetings.length == 0 ? (
          <div className="warn-text"> you have no meetings yet </div>
        ) : (
          meetings.map((e, i) => <MeetingListItem key={i} meeting={e} />)
        )}
      </div>
    </div>
  );
}

export default Meetings;
