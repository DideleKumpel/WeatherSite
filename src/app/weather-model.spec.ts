import { TestBed } from '@angular/core/testing';

import { WeatherModel } from './weather-model';

describe('WeatherModel', () => {
  let service: WeatherModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
