import { Component, Input } from '@angular/core';
import { WeatherInterface } from '../weather-interface';

@Component({
  selector: 'app-weather-details',
  imports: [],
  template: `
    <div>
      <div class="weather-main-info">
        <h1> {{ weatherDetails.temperature }}° </h1>
        <h2> {{ weatherDetails.city }}  , {{ weatherDetails.country }}</h2>
        <h3> Weather description </h3>
      </div>
      <div class="weather-details">
        <div>
          <h2>{{ weatherDetails.humanidity}}%</h2>
          <h3>Humanidity</h3>
        </div>
        <div>
          <h2>{{ weatherDetails.wind }} km/h</h2>
          <h3>Wind</h3>
        </div>
        <div>
          <h2>{{ weatherDetails.pressure }} hPa</h2>
          <h3>Presure</h3>
        </div>
      </div>
    </div>
  `,
  styleUrl: './weather-details.css',
})
export class WeatherDetails {
  @Input() weatherDetails!: WeatherInterface;

  constructor(){
     const weatherMocup: WeatherInterface = {
      city: "New York",
      country: "USA",
      temperature: 32,
      humanidity: 62,
      wind: 32,
      pressure: 10045,
      cloud: 24,
      condition: "sunny"
     }
     this.weatherDetails = weatherMocup;
    }
}
