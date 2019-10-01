import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WEATHER_DATA} from '../shared/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(protected http: HttpClient) {}

  getWeatherData() {
    return this.http.get(this.url('data/2.5/forecast'), {
      params: {
        id: '524901',
        appid: 'b1b15e88fa797225412429c1c50c122a1'
      }
    });
  }

  getDefaultData() {
    return WEATHER_DATA;
  }

  private url(path: string) {
    return environment.httpServer + '/' + path;
  }
}
