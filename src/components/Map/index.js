import React from "react";
import GoogleMapReact from "google-map-react";
import Weather from "../Weather";

const _renderWeatherByCities = (weatherData, weatherDetails) => {
  return weatherData && weatherData !== undefined ? (
    weatherData.map((data, index) => {
      return (
        <Weather
          lat={data.lat}
          lng={data.lng}
          weather={data.weather["list"] ? data.weather.list[0] : data.weather}
          key={index}
          weatherDetails={weatherDetails}
        />
      );
    })
  ) : (
    <div />
  );
};

function Map({ weatherData, weatherDetails }) {
  const defaultProps = {
    center: {
      lat: 42.73,
      lng: 25.48,
    },
    zoom: 7,
  };

  return (
    <div style={{ height: "50vh", width: "60%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpi9Dm9Mh-6cuudbyZb-iTEKM66BCzzfE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {_renderWeatherByCities(weatherData, weatherDetails)}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
