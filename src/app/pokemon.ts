export interface Pokemon {
  name: String;
  url: string;
}
export interface PokemonResponse {
  results: Pokemon[];
}
export interface PokemonByName {
  abilities: Array<any>;
  base_experience: number;
  forms: Array<any>;
  moves: Array<any>;
  name: string;
  order: number;
  species: object;
  sprites: object;
}
