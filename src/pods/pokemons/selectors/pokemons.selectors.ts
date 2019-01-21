import { RootState } from "reducer";
import { createSelector } from "reselect";
import { PokemonEntity } from "../pokemons.vm";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const getPokemons = (state: RootState) => {
    return state.pokemons;
  };

const contains = (textBase, textToSearch) =>
  textBase.toUpperCase().search(textToSearch.toUpperCase()) >= 0;

const getFilter = createSelector(getPokemons, (pokemons) => pokemons.filterReducer);

const getPokemonsData = createSelector(getPokemons, (pokemons) => pokemons.pokemonReducer.pokemons);
/*
const getPokemonsData = createSelector(getPokemons, (pokemons) => pokemons.pokemonsState.pokemons);



  const filteredPokemons = (pokemons: PokemonEntity[], filter: string) =>
  pokemons.filter(
    (pokemon) =>
      contains(pokemon.name, filter) ||
      contains(pokemon.id, filter)
  );

export const getFilteredPokemons = createSelector(getPokemonsData, getFilter, (pokemons, filter) => {
  return filter.length > 0 ? filteredPokemons(pokemons, filter) : pokemons;
});*/

export const getFilteredPokemons = createSelector(getPokemonsData, getFilter, (pokemons, filter) => {/*console.log(pokemons,filter);*/})