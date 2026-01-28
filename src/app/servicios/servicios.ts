import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonByName, PokemonResponse } from '../pokemon';

@Injectable({
  providedIn: 'root',
})
export class Servicios {
  constructor(private http: HttpClient) {}
  getAllPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .pipe(map((response: any) => response.results));
  }

  getPokemonByName(name: string): Observable<PokemonByName> {
    return this.http.get<PokemonByName>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
