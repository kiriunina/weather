import {City} from './city';
import {WeatherInfo} from './weather-info';

export interface WeatherResponseData {
  code: number;
  message: number;
  cnt: number;
  list: WeatherInfo[];
  city: City;
}
