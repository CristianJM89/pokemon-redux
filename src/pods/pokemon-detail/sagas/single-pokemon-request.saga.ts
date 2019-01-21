import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums, BaseAction } from '../../../common-app/actions';
import { pokemonAPI } from '../../../api/pokemons-api';
import { pokemonRequestActionCompleted } from '../actions/pokemon-details.actions';
import { mapFromPokemonApiToPokemonViewModel } from 'pods/pokemon-detail/pokemon-details.mapper';

export function* watchSinglePokemonRequest(){
	yield takeEvery(actionsEnums.REQUEST_SINGLE_POKEMON_STARTED, loadPokemon);
}

function* loadPokemon(action: BaseAction){
	try
	{	
		const pokemon = yield call(pokemonAPI.getPokemonById, action.payload)
		yield put(pokemonRequestActionCompleted(mapFromPokemonApiToPokemonViewModel(pokemon)))
	}catch(e)
	{
		//TODO: add error handling
		console.log("exc:",e);
	}
}