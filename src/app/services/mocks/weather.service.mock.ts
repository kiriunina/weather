import {IWeatherService} from '../interfaces/IWeatherService';
import {Observable, of} from 'rxjs';
import {WeatherInfo} from '../../models/weather-info';
import {map} from 'rxjs/operators';
import {WEATHER_DATA} from '../../consts/weather-data';

export class WeatherServiceMock implements IWeatherService {
  getWeatherData(id: string, appId: string): Observable<WeatherInfo[]> {
    return of(WEATHER_DATA).pipe(map(data => data.list));
  }
}
