import { connect } from 'react-redux';
import { PokemonFilterComponent } from './components/pokemon-filter.component';
import { pokemonsRequestAction } from './actions/pokemons.actions';
import { filterPokemons } from './actions/filter.actions';
import { PokemonFilter } from './pokemons.vm';
import { RootState } from '../../reducer';
import * as selectors from "./selectors";

const mapStateToProps = (state : RootState) => ({
    pokemons: selectors.getFilteredPokemons(state)
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (pokemonFilter : PokemonFilter) => dispatch(pokemonsRequestAction(pokemonFilter)),
    filterPokemons: (filterText: string) => dispatch(filterPokemons(filterText))
})

export const PokemonFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonFilterComponent);