import type { icons } from './lib/images';

export declare namespace WeatherData {
  interface Coord {
    lon: number;
    lat: number;
  }

  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: keyof typeof icons;
  }

  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  interface Rain {
    '1h'?: number;
    '3h'?: number;
  }

  interface Snow {
    '1h'?: number;
    '3h'?: number;
  }

  interface Clouds {
    all: number;
  }

  interface Sys {
    pod: string;
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }

  interface ForecastList {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: Rain;
    snow?: Snow;
    sys: Sys;
    dt_txt: string;
  }

  export interface FiveDaysForecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastList[];
    city: City;
  }

  export interface CurrentWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain?: Rain;
    snow?: Snow;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
}
