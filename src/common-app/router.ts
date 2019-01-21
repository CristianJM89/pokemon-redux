const basePokemon = '/pokemon-details/'; 

export const switchRoutes = {
    pokemonList: `/`,
    pokemonDetail: `${basePokemon}:id`,
}

export const navigationRoutes =  {
    pokemonList: switchRoutes.pokemonList,
    pokemonDetail: (id) => `${basePokemon}${id}`,
}