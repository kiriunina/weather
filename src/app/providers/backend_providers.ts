import {WEATHER_SERVICE_TOKEN} from '../services/interfaces/IWeatherService';
import {WeatherService} from '../services/weather.service';
import {WeatherServiceMock} from '../services/mocks/weather.service.mock';

export const BACKEND_PROVIDERS = [
  {provide: WEATHER_SERVICE_TOKEN, useClass: WeatherService}
];

export const BACKEND_MOCKS_PROVIDERS = [
  {provide: WEATHER_SERVICE_TOKEN, useClass: WeatherServiceMock}
];
