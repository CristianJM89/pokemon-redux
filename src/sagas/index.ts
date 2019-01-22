import { all, fork } from 'redux-saga/effects';
import {watchPokemonRequest} from '../pods/pokemons/sagas/pokemons-request.saga'
import { watchSinglePokemonRequest } from '../pods/pokemon-detail/sagas/';

// Register allwatchFilterGridRequest your watchers
export const rootSaga = function* root() {
  yield all([
  fork(watchPokemonRequest),
  fork(watchSinglePokemonRequest)
  ])
}