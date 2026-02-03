export interface Pokemon {
  name: string;
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
  id: number;
  order: number;
  species: object;
  sprites: PokemonSprites;
  types: Array<PokemonType>;
  height: number;
  weight: number;
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface PokemonSpritesOthers {
  'official-artwork': {
    front_default: string;
  };
}
export interface PokemonSprites {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}
