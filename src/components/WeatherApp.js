import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions";
import WeatherChart from "./WeatherChart";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  let weatherData = useSelector((state) => state.weatherData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(location));
  };

  return (
    <div>
      <h1>Historical Weather Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData.length > 0 && <WeatherChart weatherData={weatherData} />}
    </div>
  );
}

export default WeatherApp;
