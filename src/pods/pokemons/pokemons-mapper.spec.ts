import * as PokemonEntity from "./pokemons.vm";
import * as PokemonEntityApi from "../../api/model/pokemon";

import { mapFromPokemonApiToPokemonViewModel, mapFromPokemonCollectionVMToPokemonViewModel, createDefaultPokemon } from "./pokemons-mapper";

describe(`mapper can map pokemon from api to page`, () => {
    it(`should return null if data is undefined`, () => {
        //ARRANGE
        let pokemonEntityApi: PokemonEntityApi.PokemonEntity = undefined;
        //ACT
        let pokemon = mapFromPokemonApiToPokemonViewModel(pokemonEntityApi);
        //ASSERT
        expect(pokemon).toEqual(createDefaultPokemon());
    })
    /*
        it(`should return pokemonEntity object if data is valid`, () => {
            //ARRANGE
            let pokemonEntityApi: PokemonEntityApi.PokemonEntity = {
                id: 1,
                name: "pikachu",
            }
            let pokemon: PokemonEntity.PokemonEntity = {
                id: 1,
                name: 'pikachu',
            }
            //ACT
            let pokemonMapped = mapFromPokemonApiToPokemonViewModel(pokemonEntityApi);
            //ASSERT
            expect(pokemonMapped).toEqual(pokemon);
        }),

        it(`should return array with correct data`, () => {
            //ARRANGE
            let pokemonEntityApi: PokemonEntityApi.PokemonEntity = {
                id: 1,
                name: "prueba",
            }

            let pokemonEntityApiList = [pokemonEntityApi, pokemonEntityApi, null];

            let pokemon: PokemonEntity.PokemonEntity = {
                id: 1,
                name: 'prueba',
            }

            let pokemonEntityList : Array<PokemonEntity.PokemonEntity> = [];
            pokemonEntityList.push(pokemon);
            pokemonEntityList.push(pokemon);
            pokemonEntityList.push(createDefaultPokemon());
            //ACT
            let pokemonMappedList = mapFromPokemonCollectionVMToPokemonViewModel(pokemonEntityApiList);
            //ASSERT
            expect(pokemonMappedList).toEqual(pokemonEntityList);
        })*/
})

