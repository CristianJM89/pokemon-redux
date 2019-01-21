import { filterReducer } from './filter.reducer';
import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemons.reducer';
import { PokemonList } from './model';


export * from './filter.reducer';
export * from './pokemons.reducer';

export interface PokemonReducerState {
    filterReducer: string;
    pokemonReducer: PokemonList;
  };

export const pokemonReducers = combineReducers<PokemonReducerState>({
    filterReducer,
    pokemonReducer,
  });