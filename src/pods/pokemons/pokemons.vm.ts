export interface PokemonFilter {
    value: string;
}

export interface PokemonEntity {
    id: number,
    name: string,
}

export const createEmptyPokemonFilter = (): PokemonFilter => ({
    value: '',
});