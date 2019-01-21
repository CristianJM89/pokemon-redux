import { pokemonReducer } from './pokemons.reducer';

describe('pokemons/reducers/pokemonReducer tests', () => {
    it(`should return empty pokemon collection when passing undefined state and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'some type' };

        //Act
        const nextState = pokemonReducer(state, action);

        //Assert
        expect(nextState.pokemons.length).toEqual(0);
   
    });

});