import { PokemonFilter } from "../pokemons.vm";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { PokemonList } from "../reducer/model";


export const pokemonsRequestAction = (filter?: PokemonFilter): BaseAction<PokemonFilter> => ({
	type: actionsEnums.POKEMON_REQUEST_STARTED,
	payload: filter
});

export const pokemonsRequestActionCompleted = (pokemonList: PokemonList): BaseAction<PokemonList> => ({
	type: actionsEnums.POKEMON_REQUEST_COMPLETED,
	payload: pokemonList
});
