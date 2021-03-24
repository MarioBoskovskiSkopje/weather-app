import { AnyAction } from "redux";
import { FUTURE_WEATHER } from "../helper/constants";

const initialState = { data: null };

export default function futureWeather(state = initialState, action: AnyAction) {
  switch (action.type) {
    case FUTURE_WEATHER:
      return { data: action.payload };
    default:
      return state;
  }
}
