import React, { useEffect, useState } from "react";
import "./Weather.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import MyButton from "../main/myButton/MyButton";
import MyInput from "../main/myInput/MyInput";
// import 'leaflet/dist/leaflet.css';

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map2({ center, zoom, setLat, setLon }) {
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setLat(e.latlng.lat);
        setLon(e.latlng.lng);
      },
    });
    return false;
  };

  return (
    <div className="map">
      <MapContainer
       className="weatherMap"
        center={center}
        zoom={zoom}
        style={{ height: "250px", width: "500px" }}
        onClick={() => console.log("MapClicked")}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}></Marker>
        <MapEvents />
      </MapContainer>
    </div>
  );
}

const Weather = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("ankara");
  const [search, setSearch] = useState("null");
  const [lon, setLon] = useState(32.8543);
  const [lat, setLat] = useState(39.9199);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=497b241f8753792646ebf8781e0e934e&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setData(data);
        setLon(data.coord.lon);
        setLat(data.coord.lat);
        console.warn("dataFetched");
      } else {
        setMessage(data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);

      throw error;
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=497b241f8753792646ebf8781e0e934e&units=metric`
      );
      const data = await response.json();
      setData(data);
      setLon(data.coord.lon);
      setLat(data.coord.lat);
      console.warn("dataFetched");
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  useEffect(() => {
    fetchData2();
  }, [lat, lon]);

  useEffect(() => {
    console.log("lat:", lat, "lon:", lon);
  }, [lat, lon]);

  if (!data) {
    return;
  }

  let flagPng = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
  let iconPng = `https://openweathermap.org/img/wn/${data.weather[0].icon.substring(
    0,
    2
  )}d@2x.png`;

  console.log(data.weather[0].icon.substring(0, 2));
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
    console.log("Submitted ");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="weatherMain">
      <div className="weatherTop">
        <p>Weather in</p>
        <div className="weatherForm">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="weatherInput"
              type="text"
              onChange={handleChange}
            />
            {/* <MyInput onChange={handleChange}/> */}
            <MyButton type="submit" name="Find" />
          </form>
        </div>
      </div>

      <div className="weatherCard">
        <div className="weatherLeft">
          <img src={iconPng} alt="" />
        </div>
        <div className="weatherRight">
          <p className="weatherCityName">{data.name}</p>
          {/* <p>{data.weather[0].main}</p> */}
          <p className="weatherDescription">{data.weather[0].description}</p>
          <p className="weatherTemp">
            Temperature:{Math.round(data.main.temp)}°C
          </p>
          <p className="weatherHumidity">
            Humidity:{Math.round(data.main.humidity)}%
          </p>
        </div>


      </div>
      <div className="weatherMapDiv">
        <Map2
               center={[lat, lon]}
        zoom={3}
        setLat={setLat}
        setLon={setLon}
      />

        <img className="weatherFlag" src={flagPng} />

      </div>
      
    </div>
  );
};

export default Weather;
