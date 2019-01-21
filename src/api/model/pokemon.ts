export interface PokemonDetailedEntity {
    id : number,
    name : string,
    moves : string[],
    types: TypesEntity[],
}

export interface TypesEntity {
    type: TypeEntity,
}

export interface TypeEntity {
    name: string,
}

export interface PokemonEntity {
    id : number,
    name : string,
}

export interface PokemonList {
    pokemons : PokemonEntity[],
    total: number,
}
