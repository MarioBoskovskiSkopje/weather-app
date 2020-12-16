import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../Map";
import WeatherDetails from "../WeatherDetails";
import Slider from "../Slider";
import { getWeather, weatherDetails } from "../../actions";

import "./index.scss";

class Main extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    const {
      weatherData,
      weatherDetails,
      weatherDetailsData,
      futureWeatherData,
    } = this.props;
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
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherReducer.data,
    futureWeatherData: state.futureWeatherReducer.data,
    weatherDetailsData: state.weatherDetailsReducer.data,
  };
};

export default connect(mapStateToProps, { getWeather, weatherDetails })(Main);
