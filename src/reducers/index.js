import { combineReducers } from "redux";

import weatherReducer from "./weatherReducer";
import weatherDetailsReducer from "./weatherDetails";
import futureWeatherReducer from "./futureWeather";

export default combineReducers({
  weatherReducer,
  weatherDetailsReducer,
  futureWeatherReducer,
});
