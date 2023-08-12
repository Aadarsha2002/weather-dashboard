export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS";
export const FETCH_WEATHER_DATA_ERROR = "FETCH_WEATHER_DATA_ERROR";

export const fetchWeatherData = (location) => ({
  type: FETCH_WEATHER_DATA,
  payload: location,
});

export const fetchWeatherDataSuccess = (weatherData) => ({
  type: FETCH_WEATHER_DATA_SUCCESS,
  payload: weatherData,
});

export const fetchWeatherDataError = (error) => ({
  type: FETCH_WEATHER_DATA_ERROR,
  payload: error,
});
