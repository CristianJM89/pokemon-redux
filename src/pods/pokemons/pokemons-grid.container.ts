import { connect } from 'react-redux';
import { PokemonsGridComponent } from './components';
import { pokemonsRequestAction } from './actions/pokemons.actions';
import { RootState } from '../../reducer';

const mapStateToProps = (state : RootState) => ({
  pokemonList : state.pokemons.pokemonReducer.pokemons,
  totalResults : state.pokemons.pokemonReducer.total,
})

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(pokemonsRequestAction()),
});

export const PokemonsGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsGridComponent);