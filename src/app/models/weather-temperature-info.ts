import {Temperature} from './temperature';

export class WeatherTemperatureInfo {
  constructor(
    public date: string,
    public temperature: Temperature) {
  }
}
