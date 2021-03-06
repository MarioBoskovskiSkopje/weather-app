import "./index.scss";

const _renderWeatherDetails = (weatherDetails) => {
  let emptyArray = Array.from(Array(10).keys());

  return weatherDetails && weatherDetails.main
    ? Object.keys(weatherDetails.main).map((it, index) => {
        const measure =
          it.charAt(0).toUpperCase() + it.slice(1).replace(/_/g, " ");
        const editMeasure = measure.indexOf("Temp") > -1 ? "c" : "";
        return (
          <li className="weather-details__list-item" key={index}>
            {measure} : {Object.values(weatherDetails.main)[index].toFixed(0)}{" "}
            {editMeasure}
          </li>
        );
      })
    : emptyArray.map((it, index) => {
        return (
          <li key={index} className="weather-details__list-item">
            ___________
          </li>
        );
      });
};

function WeatherDetails({ weatherDetailsData }) {
  return (
    <div className="weather-details">
      <h1 className="weather-details__title">Weather Details:</h1>
      <ul>
        {weatherDetailsData && weatherDetailsData.main && (
          <li className="weather-details__list-item">
            City : {weatherDetailsData.city}
          </li>
        )}
        {_renderWeatherDetails(weatherDetailsData)}
      </ul>
    </div>
  );
}

export default WeatherDetails;
