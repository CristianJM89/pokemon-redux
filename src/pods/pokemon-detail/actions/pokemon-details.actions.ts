import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { PokemonDetails } from "../reducers/pokemon-details.reducer";

export const pokemonRequestStartAction = (id: number): BaseAction<number> => ({
	type: actionsEnums.REQUEST_SINGLE_POKEMON_STARTED,
	payload: id
  });
  
  export const pokemonRequestActionCompleted = (pokemonDetails:PokemonDetails): BaseAction<PokemonDetails> => ({
	type: actionsEnums.REQUEST_SINGLE_POKEMON_COMPLETED,
	payload: pokemonDetails
  });