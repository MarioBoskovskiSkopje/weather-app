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
          weather={
            data.weather["list"]
              ? { ...data.weather.list[0], city: data.city }
              : { ...data.weather, city: data.city }
          }
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
      lat: 41.71,
      lng: 21.77,
    },
    zoom: 8,
  };

  return (
    <div style={{ height: "50vh", width: "80%" }}>
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
