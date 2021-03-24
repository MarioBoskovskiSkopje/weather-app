import { AnyAction } from "redux";
import { WEATHER_DETAILS } from "../helper/constants";

const initialState = {
  data: null,
};

export default function weatherDetails(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case WEATHER_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
}
