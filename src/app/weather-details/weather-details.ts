import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  imports: [],
  template: `
    <div>
      <h1> Temp </h1>
      <h2> City </h2>
      <h3> Weather description </h3>
      <div class="weather details">
        <div class="huminty">
          <h2>LVL</h2>
          <h3>Huminty</h3>
        </div>
        <div class="wind">
          <h2>LVL</h2>
          <h3>Wind</h3>
        </div>
        <div class="presure">
          <h2>LVL</h2>
          <h3>Presure</h3>
        </div>
      </div>
    </div>
  `,
  styleUrl: './weather-details.css',
})
export class WeatherDetails {}
