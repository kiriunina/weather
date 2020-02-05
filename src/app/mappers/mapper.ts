import {WeatherInfo} from '../models/weather-info';
import {Temperature} from '../models/temperature';
import {Snow} from '../models/snow';

export class Mapper {
  static mapToWeatherInfoModel(data: any): WeatherInfo {
    return new WeatherInfo(
      data.dt,
      this.mapToTemperature(data.main),
      data.weather,
      data.clouds,
      this.mapToSnow(data.snow),
      data.wind,
      data.sys,
      data.dt_txt,
    );
  }

  private static mapToTemperature(data: any): Temperature {
    return new Temperature(
      data.temp,
      data.temp_min,
      data.temp_max,
      data.pressure,
      data.sea_level,
      data.grnd_level,
      data.humidity,
      data.temp_kf,
    );
  }

  private static mapToSnow(data: any): Snow {
    return new Snow(data['sh']);
  }
}
