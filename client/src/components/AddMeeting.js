import "./../App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { addMeeting } from "./../redux/meetingSlice";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
function AddMeeting() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("user") == "" ||
      localStorage.getItem("user") == undefined
    ) {
      history.push("/");
      return;
    }
  }, []);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState([51.505, -0.09]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const locateMe = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPlace([position.coords.latitude, position.coords.longitude]);
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let meeting = {
      userId: localStorage.getItem("user"),
      place: place,
      date: date,
      person: { name },
    };
    dispatch(addMeeting(meeting));
    history.push("/meetings");
  };
  return (
    <div className="add-meeting-component">
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-fields">
          <TextField
            id="outlined-basic"
            label="Who did you meet?"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            className="form-input"
          />

          <TextField
            id="date outlined-basic"
            variant="outlined"
            label="When did you meet?"
            type="date"
            value={date}
            className="form-input"
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="location-container">
          <MapContainer
            key={place}
            center={place}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={place}>
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={locateMe()}
            className="form-submit"
          >
            Locate me
          </Button>
        </div>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className="form-submit"
          disabled={name === "" || date === "" || place == []}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddMeeting;
