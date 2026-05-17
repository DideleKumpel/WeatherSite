import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, provideHttpClient } from '@angular/common/http';
import { WeatherInterface } from './weather-interface';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
import { CityDisplayInterface } from './city-display-interface';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private http = inject(HttpClient);

  private readonly apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private readonly apiAutocomplitonUrl = "https://api.weatherapi.com/v1/search.json";
  private readonly apiKey = environment.weatherApiKey;

  getWeather(city: string): Observable<WeatherInterface>{
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', city)
      .set('aqi', 'no');

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => this.mapToWeatherInterface(response))
    );
  }

  private mapToWeatherInterface(data: any): WeatherInterface {
    return {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
      pressure: data.current.pressure_mb,
      cloud: data.current.cloud,
      condition: data.current.condition.text
    };
  }

  getSugestions(query: string): Observable<CityDisplayInterface[]>{
    if (!query.trim()) {
    return new Observable<CityDisplayInterface[]>(subscriber => {
      subscriber.next([]);
      subscriber.complete();
    });
  }

    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query);

    return this.http.get<any[]>(this.apiAutocomplitonUrl, {params}).pipe(
      map(rawList => rawList.map(reposne => this.mapToCityDisplayInterface(reposne)))
    );
  }

  private mapToCityDisplayInterface(data: any): CityDisplayInterface{
    return {
      id: data.id,
      city: data.name,
      country: data.country
    }
  }
}
