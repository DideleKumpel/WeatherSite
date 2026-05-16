import { Component, Input } from '@angular/core';
import { WeatherInterface } from '../weather-interface';

@Component({
  selector: 'app-weather-details',
  imports: [],
  template: `
    <div>
      <div class="weather-main-info">
        <h1> {{ weatherDetails?.temperature }}° </h1>
        <h2> {{ weatherDetails?.city }}  , {{ weatherDetails?.country }}</h2>
        <h3> {{ weatherDetails?.condition }} </h3>
      </div>
      <div class="weather-details">
        <div>
          <h2>{{ weatherDetails?.humidity}}%</h2>
          <h3>Humidity</h3>
        </div>
        <div>
          <h2>{{ weatherDetails?.wind }} km/h</h2>
          <h3>Wind</h3>
        </div>
        <div>
          <h2>{{ weatherDetails?.pressure }} hPa</h2>
          <h3>Presure</h3>
        </div>
      </div>
    </div>
  `,
  styleUrl: './weather-details.css',
})
export class WeatherDetails {
  @Input() weatherDetails!: WeatherInterface | undefined;

  constructor(){
    }
}
