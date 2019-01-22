import Axios, { AxiosResponse } from 'axios';
import { PokemonEntity } from './model';
import { settings } from '../common-app';
import { PokemonList } from './model/pokemon';
import { calculateUrlStringByOptions } from './pokemons-api.business';

const getPokemonsURL = settings.API_Pokemon_URL;

const getAllPokemons = (options: Options = createDefaultOptions()): Promise<PokemonList> => {
    const getPokemons = calculateUrlStringByOptions(options, getPokemonsURL);
    const promise: Promise<PokemonList> = new Promise((resolve, reject) =>
        Axios.get<any>(getPokemons)
            .then(response => resolve(mapPokemonsListAPItoModel(response)))
            .catch(error => reject(error))
    );

    return promise;
}

const mapPokemonsListAPItoModel = ({ data }: AxiosResponse<any>) =>
    ({
        pokemons: data.results.map(pokemon => pokemon),
        total: parseInt(data.count),
    })

const getPokemonById = (id: number): Promise<PokemonEntity> => {
    const getPokemonByIdUrl = `${getPokemonsURL}/api/v2/pokemon/${id}`;
    const promise: Promise<PokemonEntity> = new Promise((resolve, reject) =>
        Axios.get<PokemonEntity>(getPokemonByIdUrl).then(response => resolve(mapPokemonAPIToModel(response))).catch(error => reject(error)));
    return promise;
}

const mapPokemonAPIToModel = ({ data }: AxiosResponse<PokemonEntity>): PokemonEntity => data

export const pokemonAPI = {
    getAllPokemons,
    getPokemonById
}

export interface Options {
    pageSize: number,
    pageIndex: number,
}

export const createDefaultOptions = (): Options => (
    {
        pageSize: 30,
        pageIndex: 1,
    }
);


