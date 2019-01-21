import * as PokemonEntity from "./pokemons.vm";
import * as PokemonEntityApi from "../../api/model/pokemon";

export const mapFromPokemonApiToPokemonViewModel = (pokemon: PokemonEntityApi.PokemonEntity): PokemonEntity.PokemonEntity => {
    return pokemon == undefined 
    ? 
    createDefaultPokemon()
    :
        {
            id: pokemon.id,
            name: pokemon.name,
        } 
}

export const mapFromPokemonCollectionVMToPokemonViewModel = (pokemons : PokemonEntityApi.PokemonEntity[]) : PokemonEntity.PokemonEntity[] => {
    return pokemons && pokemons.length > 0 ? pokemons.map(mapFromPokemonApiToPokemonViewModel).filter(element => element!=undefined) : [];
}

export const createDefaultPokemon = () : PokemonEntity.PokemonEntity => ({
    id: 0,
    name: "",
});
    
