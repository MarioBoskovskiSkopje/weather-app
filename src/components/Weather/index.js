import React from "react";

import "./index.scss";

function Weather({ weather, weatherDetails }) {
  const icon =
    "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";

  return (
    <div className="icon-wrapper">
      <img
        src={icon}
        className="weather-icon"
        alt="icon"
        onClick={() => weatherDetails(weather)}
      />
    </div>
  );
}
export default Weather;
