import { useEffect, useState } from "react";
import { Card, Typography } from "@material-ui/core";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "./../App.css";

function MeetingListItem({ meeting }) {
  const renderMap = () => {
    if (meeting.place.length === 0) return <div className="no-map"></div>;
    return (
      <MapContainer
        key={meeting.place}
        center={meeting.place}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={meeting.place}></Marker>
      </MapContainer>
    );
  };
  return (
    <Card className="meeting-list-item">
      <div className="map-container">{renderMap()}</div>
      <div className="meeting-list-item-text">
        <Typography variant="h6">You met : {meeting.person.name}</Typography>

        <Typography>On:{meeting.date}</Typography>
      </div>
    </Card>
  );
}

export default MeetingListItem;
