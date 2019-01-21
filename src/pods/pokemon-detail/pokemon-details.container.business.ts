export const getPokemonId = (pathname): number => {
    const param = pathname.split("/");
    const pokemonId = parseInt(param[param.length - 1]);
    return (!isNaN(pokemonId)) ? pokemonId : 0;
}