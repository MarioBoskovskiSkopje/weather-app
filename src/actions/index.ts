import axios from "axios";
import mock_data from "../mock_data";
import { Dispatch } from "react";
import API_ENDPOINTS from "../helper/endpoints";
import { IWeatherDetails, IWeatherObjData, IListItem } from "../types";
import {
  FETCHED_WEATHER,
  WEATHER_DETAILS,
  FUTURE_WEATHER,
} from "../helper/constants";

const API_KEY = "d22d6ee6288612de9d3cb7e2c18f6969";

export function getWeather() {
  return (dispatch: Dispatch<any>) => {
    let weatherData: Array<IWeatherObjData> = [];
    mock_data.map((item) =>
      axios
        .get(
          `${API_ENDPOINTS.OPEN_WEATHER}?q=${item.city}&APPID=${API_KEY}&units=metric`
        )
        .then((resp) => {
          let newObj = {
            ...item,
            weather: resp.data,
          };

          weatherData.push(newObj);

          if (weatherData.length === 36) {
            dispatch({ type: FETCHED_WEATHER, payload: weatherData });
          }
        })
        .catch((err) => [])
    );
  };
}

export function weatherDetails(weather: IWeatherDetails) {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: WEATHER_DETAILS, payload: weather });
  };
}

export function getWeatherByDay(date: String) {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({ type: WEATHER_DETAILS, payload: {} });
    let weatherData: Array<any> = [];

    const { weatherReducer } = getState();

    weatherReducer.data &&
      weatherReducer.data.map((we: IWeatherObjData) =>
        we.weather.list.filter((el: IListItem) => {
          if (
            el.dt_txt.split(" ")[0] === date &&
            el.dt_txt.split(" ")[1] === "00:00:00"
          ) {
            let newObj = {
              ...we,
              weather: el,
            };

            return weatherData.push(newObj);
          }

          return weatherData;
        })
      );

    dispatch({ type: FUTURE_WEATHER, payload: weatherData });
  };
}
