import { PokemonDetails } from "./pokemon-details.component";
import { pokemonRequestStartAction } from "./actions/pokemon-details.actions";
import { connect } from "react-redux";
import { RootState } from "reducer";

const mapStateToProps = (state : RootState) => ({
    pokemonDetails: state.pokemonDetails.pokemonDetails
})

const mapDispatchToProps = (dispatch) => ({
    onload: (pokemonDetailsId : number) => dispatch(pokemonRequestStartAction(pokemonDetailsId)),
})

export const PokemonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails);