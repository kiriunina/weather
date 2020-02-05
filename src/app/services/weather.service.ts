import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IWeatherService} from './interfaces/IWeatherService';
import {Observable} from 'rxjs';
import {WeatherInfo} from '../models/weather-info';
import {WeatherResponseData} from '../models/weather-response-data';
import {map} from 'rxjs/operators';
import {Mapper} from '../mappers/mapper';

export class WeatherService implements IWeatherService {

  constructor(protected http: HttpClient) {}

  getWeatherData(id: string, appId: string): Observable<WeatherInfo[]> {
    return this.http.get<WeatherResponseData>(this.url('data/2.5/forecast'), {
      params: {
        id: id,
        appid: appId,
      }
    }).pipe(map(data => data.list.map(item => Mapper.mapToWeatherInfoModel(item))));
  }

  private url(path: string) {
    return environment.httpServer + '/' + path;
  }
}
