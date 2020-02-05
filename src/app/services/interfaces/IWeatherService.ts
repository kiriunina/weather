import {Observable} from 'rxjs';
import {WeatherInfo} from '../../models/weather-info';

export const WEATHER_SERVICE_TOKEN = 'WeatherServiceToken';

export interface IWeatherService {
  getWeatherData(id: string, appId: string): Observable<WeatherInfo[]>;
}
