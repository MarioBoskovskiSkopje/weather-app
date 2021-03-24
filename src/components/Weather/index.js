import { useDispatch } from "react-redux";
import { weatherDetails } from "../../actions";

import "./index.scss";

const Weather = ({ weather }) => {
  const dispatch = useDispatch();
  const icon =
    "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";

  return (
    <div className="icon-wrapper">
      <img
        src={icon}
        className="weather-icon"
        alt="icon"
        onClick={() => dispatch(weatherDetails(weather))}
      />
    </div>
  );
};
export default Weather;
