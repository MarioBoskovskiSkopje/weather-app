import { WEATHER_DETAILS } from "../helper/constants";

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
};
