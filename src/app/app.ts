import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDetails } from './weather-details/weather-details';
import { WeatherService } from './weather-service';
import { WeatherInterface } from './weather-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherDetails, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WeatherSite');
  weatherService = inject(WeatherService);
  
  searchText : string  = "";
  fetchedWeather : WeatherInterface | undefined;
  isLoading = false

  searchWeather(): void{
    console.log("szukaaam");

    if(this.searchText.trim() === ""){
      console.log("empty")
      return;
    }

    this.isLoading = true;
    this.weatherService.getWeather(this.searchText).subscribe({
      next: (data) => {
        console.log("good")
        this.fetchedWeather = data;
        this.isLoading = false;
      },
      error: () => {
        console.log("bad")
        this.isLoading = false;
      }
    });
  }
}
