import { combineReducers } from "redux";
import {
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR,
} from "./actions";

const weatherDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_SUCCESS:
      return action.payload;
    case FETCH_WEATHER_DATA_ERROR:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
});

export default rootReducer;
