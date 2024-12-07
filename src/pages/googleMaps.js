// src/components/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { listings } from "../dataController";

const GoogleMapComponent = () => {
  
const containerStyle = {
    width: "100%",
    height: "400px",
  };
  
  const center = {
    lat: 14.5995, // Metro Manila center
    lng: 120.9842,
  };
  console.log(listings);
  return (
    <div>
      <h1>Metro Manila Listings</h1>
      <div style={{ display: "flex" }}>
        {/* Map */}
        <div style={{ flex: 2, marginRight: "10px" }}>
          <LoadScript googleMapsApiKey="AIzaSyAICgUsG-UUCRWbzKe_Qs0PihdLh1I4V0M">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
              {listings.map((listing) => (
                <Marker
                  key={listing.id}
                  position={listing.location}
                  title={listing.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
        
        {/* Listings */}
        <div style={{ flex: 1, overflowY: "auto", maxHeight: "400px" }}>
          {listings.map((listing) => (
            <div key={listing.id} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>{listing.title}</h3>
              <p>{listing.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
