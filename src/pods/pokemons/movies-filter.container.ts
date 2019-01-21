import { connect } from 'react-redux';
import { PokemonFilter } from './pokemons.vm';
import { PokemonFilterComponent } from './components/pokemon-filter.component';
import { pokemonsRequestAction } from './actions/pokemons.actions';
import { RootState } from 'reducer';


const mapStateToProps = (state : RootState) => ({
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (pokemonFilter : PokemonFilter) => dispatch(pokemonsRequestAction(pokemonFilter)),
})

export const MoviesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonFilterComponent);