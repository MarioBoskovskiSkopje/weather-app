import { FETCHED_WEATHER } from "../helper/constants";

const initialState = {
  data: null,
  fetched: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_WEATHER:
      return { data: action.payload, fetched: true };
    default:
      return state;
  }
};
