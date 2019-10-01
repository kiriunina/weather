import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {WeatherTemperatureInfo} from '../../models/weather-temperature-info';
import {Temperature} from '../../models/temperature';
import {WeatherInfo} from '../../models/weather-info';
import {Weather} from '../../models/weather';
import {Clouds} from '../../models/clouds';
import {Snow} from '../../models/snow';
import {Wind} from '../../models/wind';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  isDataLoaded: boolean;
  temperaturesInfo: WeatherTemperatureInfo[];

  temperatures: any[];
  pressures: any[];
  labels: string[];
  weatherInfo: WeatherInfo[];

  constructor(private weatherService: WeatherService) {
    this.isDataLoaded = false;
  }

  ngOnInit() {
    this.getDefaultWeatherData();
    // this.weatherService.getWeatherData().subscribe(this.getData);
  }

  getDefaultWeatherData() {
    const data = this.weatherService.getDefaultData();

    this.getNecessaryWeatherData(data);

    this.isDataLoaded = true;
  }

  getData = (data) => {
    this.getNecessaryWeatherData(data);

    this.isDataLoaded = true;
  }

  getNecessaryWeatherData(data) {
    this.temperaturesInfo = this.getTemperaturesData(data);
    this.labels = this.temperaturesInfo.map(t => t.date);
    this.temperatures = this.getAllTemperaturesData(this.temperaturesInfo);
    this.pressures = this.getAllPressuresData(this.temperaturesInfo);
    this.weatherInfo = this.getWeatherInfo(data);
  }

  getTemperaturesData(data): Array<WeatherTemperatureInfo> {
    return data.list.map(d => new WeatherTemperatureInfo(
      this.fromTimestamp(d.dt),
      new Temperature(
        d.main.temp,
        d.main.temp_min,
        d.main.temp_max,
        d.main.pressure,
        d.main.sea_level,
        d.main.grnd_level,
        d.main.humidity,
        d.main.temp_kf
      )));
  }

  getWeatherInfo(data): Array<WeatherInfo> {
    return data.list.map(d => new WeatherInfo(
      d.dt,
      null,
      d.weather.map(w => new Weather(w.id, w.main, w.description, w.icon)),
      new Clouds(d.clouds.all),
      (d.snow['3h'] ? new Snow(d.snow['3h']) : null),
      new Wind(d.wind.speed, d.wind.deg)
    ));
  }

  private fromTimestamp(dt: number) {
    const date = new Date();
    date.setTime(dt * 1000);

    return date.toLocaleString();
  }

  private getAllTemperaturesData(temperaturesInfo: WeatherTemperatureInfo[]) {
    const arr = [];

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'temp'),
      label: 'Температура'
    });

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'tempMin'),
      label: 'Минимальная температура'
    });

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'tempMax'),
      label: 'Максимальня температура'
    });

    return arr;
  }

  private getAllPressuresData(temperaturesInfo: WeatherTemperatureInfo[]) {
    const arr = [];

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'pressure'),
      label: 'Атмосферное давление'
    });

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'seaLevel'),
      label: 'Атмосферное давление на уровне моря'
    });

    arr.push({
      data: this.getDataByField(temperaturesInfo, 'grndLevel'),
      label: 'Атмосферное давление на уровне земли'
    });

    return arr;
  }

  private getDataByField(temperaturesInfo: WeatherTemperatureInfo[], field: string) {
    return temperaturesInfo.map(t => t.temperature[field]);
  }
}
