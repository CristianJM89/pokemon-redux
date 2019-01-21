import { mapFromPokemonApiToPokemonViewModel } from "./pokemon-details.mapper";
import { PokemonDetailedEntity, TypeEntity, TypesEntity } from "../../api/model";

describe('pods/pokemon-details.mapper', () => {
    it('should return default pokemon if pokemon parameter is undefined', () => {
        //Arrange

        //Act
        const returnedPokemon = mapFromPokemonApiToPokemonViewModel(undefined);
        //Assert
        expect(returnedPokemon.id).toEqual(0);
        expect(returnedPokemon.name).toEqual('');
        expect(returnedPokemon.totalMoves).toEqual(0);
        expect(returnedPokemon.type).toEqual('');

    })
        it('should return a valid vm pokemon given an api pokemonEntity parameter', () => {
            //Arrange
            const type: TypeEntity = {
                name: 'poison',
            }

            const types: TypesEntity = {
                type: type,
            }
            
            const pokemon: PokemonDetailedEntity = {
                id: 1,
                name: 'nombre prueba',
                moves: ['move', 'move'],
                types: [types],
            }
            //Act
            const returnedpokemon = mapFromPokemonApiToPokemonViewModel(pokemon);
            //Assert

            expect(returnedpokemon.id).toEqual(1);
            expect(returnedpokemon.name).toEqual('nombre prueba');
            expect(returnedpokemon.totalMoves).toEqual(2);
            expect(returnedpokemon.type).toEqual('poison');

        });
    it('should return a valid vm pokemon given an api pokemonEntity with corrupt id parameter', () => {
        //Arrange
        const type: TypeEntity = {
            name: 'poison',
        }

        const types: TypesEntity = {
            type: type,
        }
        
        const pokemon: PokemonDetailedEntity = {
            id: null,
            name: 'nombre prueba',
            moves: ['move', 'move'],
            types: [types],
        }
        //Act
        const returnedpokemon = mapFromPokemonApiToPokemonViewModel(pokemon);
        //Assert

        expect(returnedpokemon.id).toEqual(null);
        expect(returnedpokemon.name).toEqual('nombre prueba');
        expect(returnedpokemon.totalMoves).toEqual(2);
        expect(returnedpokemon.type).toEqual('poison');
    });
    /*
    it('should return a valid vm pokemon given an api pokemonEntity with null year parameter', () => {
        //Arrange
        const pokemon: PokemonDetailedEntity = {
            id: '1',
            agerating: [7, 11],
            genres: ['drama', 'comedy'],
            poster: 'poster',
            synopsis: 'synopsis',
            title: 'title',
            year: null
        }
        //Act
        const returnedpokemon = mapFromPokemonApiToPokemonViewModel(pokemon);
        //Assert

        expect(returnedpokemon.id).toEqual(1);
        expect(returnedpokemon.genre).toEqual('drama');
        expect(returnedpokemon.ageRating).toEqual(7);
        expect(returnedpokemon.posterUrl).toEqual('poster');
        expect(returnedpokemon.synopsis).toEqual('synopsis');
        expect(returnedpokemon.title).toEqual('title');
        expect(returnedpokemon.year).toEqual(null);
    });

    it('should return a valid vm pokemon given an api pokemonEntity with any string parameter as null', () => {
        //Arrange
        const pokemon: PokemonDetailedEntity = {
            id: '1',
            agerating: [7, 11],
            genres: ['drama', 'comedy'],
            poster: null,
            synopsis: 'synopsis',
            title: 'title',
            year: 2000
        }
        //Act
        const returnedpokemon = mapFromPokemonApiToPokemonViewModel(pokemon);
        //Assert

        expect(returnedpokemon.id).toEqual(1);
        expect(returnedpokemon.genre).toEqual('drama');
        expect(returnedpokemon.ageRating).toEqual(7);
        expect(returnedpokemon.posterUrl).toEqual(null);
        expect(returnedpokemon.synopsis).toEqual('synopsis');
        expect(returnedpokemon.title).toEqual('title');
        expect(returnedpokemon.year).toEqual(2000);
    });*/
}
)