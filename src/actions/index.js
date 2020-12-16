import axios from "axios";
import mock_data from "../mock_data";
import API_ENDPOINTS from "../helper/endpoints";
import {
  FETCHED_WEATHER,
  WEATHER_DETAILS,
  FUTURE_WEATHER,
} from "../helper/constants";

const API_KEY = "d22d6ee6288612de9d3cb7e2c18f6969";

export function getWeather() {
  return (dispatch) => {
    let weatherData = [];
    let filteredCities = mock_data.reduce((acc, current) => {
      const x = acc.find((item) => item.admin_name === current.admin_name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    filteredCities.map((city) => {
      axios
        .get(
          `${API_ENDPOINTS.OPEN_WEATHER}?q=${city.city}&APPID=${API_KEY}&units=metric`
        )
        .then((resp) => {
          let newObj = {
            ...city,
            weather: resp.data,
          };
          weatherData.push(newObj);

          if (weatherData.length === 28) {
            dispatch({ type: FETCHED_WEATHER, payload: weatherData });
          }
        })
        .catch((err) => console.log("err msg", err));
    });
  };
}

export function weatherDetails(weather) {
  return (dispatch) => {
    dispatch({ type: WEATHER_DETAILS, payload: weather });
  };
}

export function getWeatherByDay(date) {
  return (dispatch, getState) => {
    let weatherData = [];
    const { weatherReducer } = getState();
    weatherReducer.data &&
      weatherReducer.data.map((we) => {
        we.weather.list.filter((el) => {
          if (
            el.dt_txt.split(" ")[0] === date &&
            el.dt_txt.split(" ")[1] === "00:00:00"
          ) {
            let newObj = {
              ...we,
              weather: el,
            };

            weatherData.push(newObj);
          }
        });
      });

    dispatch({ type: FUTURE_WEATHER, payload: weatherData });
  };
}
