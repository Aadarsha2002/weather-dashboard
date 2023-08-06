import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WEATHER_DATA,
  fetchWeatherDataSuccess,
  fetchWeatherDataError,
  fetchWeatherDataRequest,
} from "./actions";
import {
  API_KEY,
  FORECAST_WEATHER_DATA_BASE_URL,
  LOCATION_DATA_BASE_URL,
} from "../constants";

function* fetchWeatherDataSaga(action) {
  try {
    yield put(fetchWeatherDataRequest()); // Dispatch the fetchWeatherDataRequest action

    // Use geocoding API to get latitude and longitude
    const geocodingUrl = `${LOCATION_DATA_BASE_URL}?q=${action.payload}&limit=1&appid=${API_KEY}`;
    const geocodingResponse = yield axios.get(geocodingUrl);
    const { lat, lon } = geocodingResponse.data[0];

    const forecastWeatherUrl = `${FORECAST_WEATHER_DATA_BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const forecastWeatherResponse = yield axios.get(forecastWeatherUrl);
    yield put(fetchWeatherDataSuccess(forecastWeatherResponse.data));
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
