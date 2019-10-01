import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMultiLinesComponent } from './weather-multi-lines.component';

describe('WeatherMultiLinesComponent', () => {
  let component: WeatherMultiLinesComponent;
  let fixture: ComponentFixture<WeatherMultiLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMultiLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMultiLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
