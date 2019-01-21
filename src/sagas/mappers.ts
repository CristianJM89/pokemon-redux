import * as ApiEntities from '../api/model/pokemon';
import * as PokemonsReducerEntities from "../pods/pokemons/reducer/model";

export const mapFromPokemonApiToPokemonViewModel = (pokemon: ApiEntities.PokemonEntity, index:number): PokemonsReducerEntities.PokemonEntity => {
    return pokemon == undefined 
    ? 
        createDefaultPokemon()
    :
        {
            id: ++index,
            name: pokemon.name,
        } 
}

export const mapEntityFromApiPokemonToReducerPokemons = (pokemons : ApiEntities.PokemonList) : PokemonsReducerEntities.PokemonList => {
     return pokemons && pokemons.pokemons && pokemons.pokemons.length > 0 
        ? 
        {
            pokemons: pokemons.pokemons.map(mapFromPokemonApiToPokemonViewModel).filter(element => element!=undefined),
            total: pokemons.total
        }
        : 
        createDefaultPokemonsList()
        ;
        
}

const createDefaultPokemon = () : PokemonsReducerEntities.PokemonEntity => ({
    id: 0,
    name: "",
});

const createDefaultPokemonsList = () : PokemonsReducerEntities.PokemonList => ({
    pokemons: [],
    total: 0,
})