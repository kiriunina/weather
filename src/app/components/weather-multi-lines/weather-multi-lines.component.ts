import {Component, Input, OnInit} from '@angular/core';
import {Color} from 'ng2-charts';
import {ChartDataSets} from 'chart.js';
import {COLORS} from '../../shared/colors';

@Component({
  selector: 'app-weather-multi-lines',
  templateUrl: './weather-multi-lines.component.html',
  styleUrls: ['./weather-multi-lines.component.scss']
})
export class WeatherMultiLinesComponent implements OnInit {
  @Input() data;
  @Input() labels;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels;
  public lineChartColors: Color[] = COLORS;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {
  }

  ngOnInit() {
    this.lineChartLabels = this.labels;

    this.data.forEach((value) => {
      this.lineChartData.push({data: value.data, label: value.label});
    });
  }
}
