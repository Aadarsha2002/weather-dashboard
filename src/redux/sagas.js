import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WEATHER_DATA,
  fetchWeatherDataSuccess,
  fetchWeatherDataError,
} from "./actions";
import {
  API_KEY,
  FORECAST_WEATHER_DATA_BASE_URL,
  LOCATION_DATA_BASE_URL,
} from "../constants";

function* fetchWeatherDataSaga(action) {
  try {
    // Use geocoding API to get latitude and longitude
    const geocodingUrl = `${LOCATION_DATA_BASE_URL}?q=${action.payload}&limit=1&appid=${API_KEY}`;
    const geocodingResponse = yield axios.get(geocodingUrl);
    const { lat, lon } = geocodingResponse.data[0];
    console.log("sagas lat lon", lat, lon);

    const forecastWeatherUrl = `${FORECAST_WEATHER_DATA_BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const weatherResponse = yield axios.get(forecastWeatherUrl);
    console.warn("sagas weatherData", weatherResponse?.data);
    let weatherData = [];
    if (weatherResponse.data.list) {
      weatherData = weatherResponse.data.list.map((day) => {
        return {
          date: day.dt,
          temp: day.main.temp,
        };
      });
    }

    yield put(fetchWeatherDataSuccess(weatherData));
  } catch (error) {
    yield put(fetchWeatherDataError(error));
  }
}

function* watchFetchWeatherData() {
  yield takeLatest(FETCH_WEATHER_DATA, fetchWeatherDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchWeatherData()]);
}
