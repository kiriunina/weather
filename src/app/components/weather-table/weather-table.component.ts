import {Component, Input, OnInit} from '@angular/core';
import {WeatherInfo} from '../../models/weather-info';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {
  @Input() data: WeatherInfo[];

  constructor() {
  }

  ngOnInit() {
  }

  getSymbol(icon: string) {
    return String.fromCharCode(parseInt(icon, 16));
  }
}
