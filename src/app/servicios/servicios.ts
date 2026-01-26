import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Servicios {
  constructor(private http: HttpClient) {}
  getAllPokemons() {
    return lastValueFrom(
      this.http
        .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .pipe(map((response: any) => response.results)),
    );
  }
}
