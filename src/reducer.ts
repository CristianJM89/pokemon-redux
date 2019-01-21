import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { pokemonReducers, PokemonReducerState } from "./pods/pokemons/reducer";
import { PokemonDetailsRootState, pokemonDetailsReducers } from 'pods/pokemon-detail/reducers';

export interface RootState {
  router:any,
  pokemons: PokemonReducerState,
  pokemonDetails: PokemonDetailsRootState,
  pokemonFilter: string,
}

// Root reducer.
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  pokemons: pokemonReducers,
  pokemonDetails: pokemonDetailsReducers,
});
