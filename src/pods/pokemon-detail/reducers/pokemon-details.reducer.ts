import { PokemonDetailsVM } from "../pokemon-details.vm";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { createDefaultPokemon } from "../pokemon-details.mapper";

export type PokemonDetails = PokemonDetailsVM;

export const pokemonReducer = (state: PokemonDetails = createDefaultPokemon(), action: BaseAction) => {
    switch(action.type){
        case actionsEnums.REQUEST_SINGLE_POKEMON_COMPLETED:
            return handleRequestSinglePokemon(action.payload);
    }
   return state  
}

const handleRequestSinglePokemon = (pokemonDetails: PokemonDetails) => (
    pokemonDetails
)
