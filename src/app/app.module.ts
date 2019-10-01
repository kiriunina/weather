import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherMultiLinesComponent } from './components/weather-multi-lines/weather-multi-lines.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { DatetimePipe } from './pipes/datetime.pipe';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherMultiLinesComponent,
    WeatherTableComponent,
    DatetimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
