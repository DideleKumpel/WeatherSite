import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDetails } from './weather-details/weather-details';
import { WeatherService } from './weather-service';
import { WeatherInterface } from './weather-interface';
import { FormsModule } from '@angular/forms';
import { CityDisplayInterface } from './city-display-interface';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
  suggestions = signal<CityDisplayInterface[]>([]); 

  fetchedWeather : WeatherInterface | undefined;
  isLoading = false

  private searchTerms = new Subject<string>();
  private sub = new Subscription();

  ngOnInit(): void {
    this.sub = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.weatherService.getSugestions(term))
    ).subscribe({
      next: (data) => {
        this.suggestions.set(data);
      }
    });
  }


  searchWeather(): void{
    console.log("searchig");

    if(this.searchText.trim() === ""){
      console.log("empty")
      return;
    }

    this.isLoading = true;
    this.suggestions.set([]);
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

  onInputChange(): void {
    this.searchTerms.next(this.searchText);
  }

  selectSuggestion(cityName: string): void {
    this.searchText = cityName;
    this.suggestions.set([]);
    this.searchWeather();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
