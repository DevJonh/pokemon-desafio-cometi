export interface IPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResultPokemon[];
}

export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface IResultPokemon {
  name: string;
  url: string;
}
export interface IResultPokemonType {
  pokemon: { pokemon: { name: string; url: string } }[];
}

export interface IPokemonDetails {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  species: { name: string };
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
}
