import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon-details.reducer";
import { PokemonDetailsVM } from "../pokemon-details.vm";

export interface PokemonDetailsRootState {
    pokemonDetails: PokemonDetailsVM,
}

export const pokemonDetailsReducers = combineReducers<PokemonDetailsRootState>({
	pokemonDetails: pokemonReducer,
  });