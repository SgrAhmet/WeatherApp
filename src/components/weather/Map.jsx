import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (flag,lon,lat) => {
  const handleClick = (event) => {
    console.log(event.latlng);
  };


  console.log(flag.flag)
  console.log(lon)
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '400px', width: '400px' }}
      onClick={handleClick}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;