import { Component } from '@angular/core';
import { Servicios } from '../../servicios/servicios';
import { Pokemon, PokemonByName } from '../../pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  pokemones: Observable<Pokemon[]>;
  pokemonSearch: Observable<PokemonByName>;
  loading = true;
  constructor(private api: Servicios) {
    this.pokemones = this.api.getAllPokemons();
    this.pokemonSearch = this.api.getPokemonByName('pikachu');
  }
  log(pokemonSearch: PokemonByName) {
    console.log(pokemonSearch);
  }
  getImageUrl(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
