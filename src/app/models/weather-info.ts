import {Temperature} from './temperature';
import {Weather} from './weather';
import {Clouds} from './clouds';
import {Snow} from './snow';
import {Wind} from './wind';

export class WeatherInfo {
  constructor(
    public dt: number,
    public temperature: Temperature,
    public weather: Weather[],
    public clouds: Clouds,
    public snow: Snow,
    public wind: Wind) {
  }

}
