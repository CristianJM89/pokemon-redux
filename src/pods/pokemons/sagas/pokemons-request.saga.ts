import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums } from '../../../common-app/actions';
import { pokemonsRequestActionCompleted } from '../actions/pokemons.actions';
import { Options, pokemonAPI } from '../../../api/pokemons-api'
import { settings } from '../../../common-app/config';
import { PokemonList } from '../../../api/model/pokemon';
import { mapEntityFromApiPokemonToReducerPokemons } from './pokemons-mapper.saga';

export function* watchPokemonRequest(){
	yield takeEvery(actionsEnums.POKEMON_REQUEST_STARTED, loadPokemons);
}

function* loadPokemons(){
	try
	{	
		//const filter : PokemonFilter = action.payload; 	If the filter is needed for be dispatched
		const options : Options = {
			pageIndex:1,
			pageSize:settings.pageSize,
		  };
		const pokemonList : PokemonList = yield call(pokemonAPI.getAllPokemons, options);
		yield put(pokemonsRequestActionCompleted(mapEntityFromApiPokemonToReducerPokemons(pokemonList)));
	}catch(e)
	{
		//TODO: add error handling
		console.log("exc:",e);
	}
}