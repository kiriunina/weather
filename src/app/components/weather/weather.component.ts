import {Component, Inject, OnInit} from '@angular/core';
import {WeatherTemperatureInfo} from '../../models/weather-temperature-info';
import {WeatherInfo} from '../../models/weather-info';
import {IWeatherService, WEATHER_SERVICE_TOKEN} from '../../services/interfaces/IWeatherService';
import {Subscription} from 'rxjs';
import {SERVICE_APP_ID, SERVICE_ID} from '../../consts/app-data';
import {HttpErrorResponse} from '@angular/common/http';
import {DateTransformer} from '../../helpers/date-transformer';
import {Graph} from '../../models/graph';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  isDataLoaded = false;
  temperaturesInfo: WeatherTemperatureInfo[] = [];
  temperatures: Graph[] = [];
  pressures: Graph[] = [];
  labels: string[] = [];
  weatherInfo: WeatherInfo[] = [];

  private subscription$: Subscription;

  constructor(@Inject(WEATHER_SERVICE_TOKEN) private weatherService: IWeatherService) {}

  ngOnInit() {
    this.loadWeatherData();
  }

  private loadWeatherData() {
    this.subscription$ = this.weatherService.getWeatherData(SERVICE_ID, SERVICE_APP_ID).subscribe(this.analyseResponse, this.errorHandler);
  }

  private analyseResponse = (weathersInfo: WeatherInfo[]) => {
    this.temperaturesInfo = this.getTemperatureData(weathersInfo);
    this.labels = this.getDates(this.temperaturesInfo);
    this.temperatures = this.getAllTemperaturesData(this.temperaturesInfo);
    this.pressures = this.getAllPressuresData(this.temperaturesInfo);
    this.weatherInfo = weathersInfo;

    this.isDataLoaded = true;
  }

  private errorHandler = (error: HttpErrorResponse) => {
    console.error(error);
  }

  private getTemperatureData(weathersInfo: WeatherInfo[]): WeatherTemperatureInfo[] {
    return weathersInfo.map(item => {
      return {
        date: DateTransformer.fromTimestamp(item.dt),
        temperature: item.main
      };
    });
  }

  private getDates(weatherTemperatureInfo: WeatherTemperatureInfo[]): string[] {
    return weatherTemperatureInfo.map(item => item.date);
  }

  private getAllTemperaturesData(temperaturesInfo: WeatherTemperatureInfo[]): Graph[] {
    let graph: Graph[] = [];

    graph = this.addDataToArray(graph, temperaturesInfo, 'temp', 'Температура');
    graph = this.addDataToArray(graph, temperaturesInfo, 'tempMin', 'Минимальная температура');
    graph = this.addDataToArray(graph, temperaturesInfo, 'tempMax', 'Максимальня температура');

    return graph;
  }

  private getAllPressuresData(temperaturesInfo: WeatherTemperatureInfo[]): Graph[] {
    let graph: Graph[] = [];

    graph = this.addDataToArray(graph, temperaturesInfo, 'pressure', 'Атмосферное давление');
    graph = this.addDataToArray(graph, temperaturesInfo, 'seaLevel', 'Атмосферное давление на уровне моря');
    graph = this.addDataToArray(graph, temperaturesInfo, 'grndLevel', 'Атмосферное давление на уровне земли');

    return graph;
  }

  private addDataToArray(graph: Graph[], from: WeatherTemperatureInfo[], field: string, label: string): Graph[] {
    graph.push({
      data: this.getDataByField(from, field),
      label: label,
    });

    return graph;
  }

  private getDataByField(temperaturesInfo: WeatherTemperatureInfo[], field: string): number[] {
    return temperaturesInfo.map(t => t.temperature[field]);
  }
}
