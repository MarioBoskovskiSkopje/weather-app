import { FUTURE_WEATHER } from "../helper/constants";

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FUTURE_WEATHER:
      return { data: action.payload };
    default:
      return state;
  }
};
