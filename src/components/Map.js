import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "30vw",
  height: "28vh",
  borderRadius: "10px",
  border: "7px solid black",
};

const position = {
  lat: 32.75043315781318,
  lng: -117.10234600435358,
};

const defaultMapOptions = {
  disableDefaultUI: true,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={12}
        options={defaultMapOptions}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
