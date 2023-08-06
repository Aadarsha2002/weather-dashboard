import { combineReducers } from "redux";
import {
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR,
  FETCH_WEATHER_DATA_REQUEST,
} from "./actions";

const weatherDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
      };
    case FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
});

export default rootReducer;
