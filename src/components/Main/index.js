import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "../Map";
import WeatherDetails from "../WeatherDetails";
import Slider from "../Slider";
import { getWeather, weatherDetails } from "../../actions";

import "./index.scss";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  const results = useSelector((state) => state);

  const {
    weatherReducer,
    weatherDetailsReducer,
    futureWeatherReducer,
  } = results;

  const weatherData = weatherReducer.data;
  const weatherDetailsData = weatherDetailsReducer.data;
  const futureWeatherData = futureWeatherReducer.data;

  return (
    <div className="app-container">
      <div className="map-details-wrapper">
        <Map
          weatherData={
            futureWeatherData && futureWeatherData.length > 0
              ? futureWeatherData
              : weatherData
          }
          weatherDetails={weatherDetails}
        />
        <WeatherDetails weatherDetailsData={weatherDetailsData} />
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  );
};

export default Main;
