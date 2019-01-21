import { actionsEnums, BaseAction } from "../../../common-app/actions";
import { PokemonList, PokemonEntity } from "./model";

export interface PokemonState {
  pokemons: PokemonEntity[],
  total: number
}

export const pokemonReducer  = (state:PokemonState = createDefaultPokemonList() , action:BaseAction) : PokemonState => {
    switch (action.type) {
      case actionsEnums.POKEMON_REQUEST_COMPLETED:
        return handlePokemonRequestCompletedAction(state, action.payload);
    }
  
    return state;
};

const createDefaultPokemonList = () : PokemonState => ({
    pokemons : [],
    total: 0
});

const handlePokemonRequestCompletedAction = (state:PokemonState, payload: PokemonList) : PokemonState => ({
  pokemons: payload.pokemons,
  total: payload.total
});

  