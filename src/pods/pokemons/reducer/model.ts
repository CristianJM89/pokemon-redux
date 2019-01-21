export interface PokemonEntity {
    id: number;
    name: string;
}

export interface PokemonList {
    pokemons : PokemonEntity[],
    total: number
}
