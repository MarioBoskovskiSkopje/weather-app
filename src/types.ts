interface IWeather {
  id: Number;
  main: String;
  description: String;
  icon: String;
  list: Array<IListItem>;
}

interface IMain {
  temp: Number;
  feels_like: Number;
  temp_min: Number;
  temp_max: Number;
  pressure: Number;
  sea_level: Number;
  grnd_level: Number;
  humidity: Number;
  temp_kf: Number;
}

export interface IListItem {
  dt: String;
  main: IMain;
  weather: IWeather;
  dt_txt: String;
}

export interface IWeatherObjData {
  admin_name: String;
  capital: String;
  city: String;
  country: String;
  iso2: String;
  lat: String;
  lng: String;
  population: String;
  population_proper: String;
  weather: IWeather;
}

export interface IWeatherDetails {
  weather: IMain;
}

 
