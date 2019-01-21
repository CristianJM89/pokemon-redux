import { getPokemonId } from "./pokemon-details.container.business";

describe('pods/pokemon-details.business', () => {
    it('should return pokemonId given a valid url', () => {
        //Arrange
        const url = '/pokemon-detail/2';
        //Act
        const pokemonId = getPokemonId(url)
        //Assert
        expect(pokemonId).toEqual(2);

    });
    it('should return pokemonId given a invalid url', () => {
        //Arrange
        const url = '/pokemon-detail/';
        //Act
        const pokemonId = getPokemonId(url)
        //Assert
        expect(pokemonId).toEqual(0);
    });
    it('should return pokemonId given a larger parts url with no Id', () => {
        //Arrange
        const url = '/pokemons/pokemon-detail/';
        //Act
        const pokemonId = getPokemonId(url)
        //Assert
        expect(pokemonId).toEqual(0);
    });
    it('should return pokemonId given a larger parts url with Id', () => {
        //Arrange
        const url = '/pokemons/pokemon-detail/3';
        //Act
        const pokemonId = getPokemonId(url)
        //Assert
        expect(pokemonId).toEqual(3);
    });
});