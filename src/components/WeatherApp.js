import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions";
import WeatherChart from "./WeatherChart";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(location));
  };

  return (
    <div>
      <h1>5-day Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {weatherData.list && <WeatherChart weatherData={weatherData} />}
    </div>
  );
}

export default WeatherApp;
