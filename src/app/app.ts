import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDetails } from './weather-details/weather-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WeatherSite');
}
