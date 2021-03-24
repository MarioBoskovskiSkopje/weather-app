import { AnyAction } from "redux";
import { FETCHED_WEATHER } from "../helper/constants";

const initialState = {
  data: null,
  fetched: null,
};

export default function weatherReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case FETCHED_WEATHER:
      return { data: action.payload, fetched: true };
    default:
      return state;
  }
}
