import { pokemonReducer, PokemonDetails } from "./pokemon-details.reducer";
const deepFreeze = require("deep-freeze");

describe('pods/move-detail/reducers/pokemon-detail.reducer', () => {
    it(`should return default state (not undefined) when passing undefined state 
    and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'type' };

        //Act
        const nextState = pokemonReducer(state, action);

        //Assert
        expect(nextState).toBeDefined();
   
    });
    it(`should return a new state without mutating the original one,
     when passing an state and action type REQUEST_SINGLE_POKEMON_COMPLETED`, () => {
        //Arrange
        const state: PokemonDetails = {
            id: 1,
            name: 'pikachu',
            totalMoves: 12,
            type: 'posion',
        };

        const action = { type: 'actionsEnums.REQUEST_SINGLE_POKEMON_COMPLETED' };
        deepFreeze(state);
        //Act
        const nextState = pokemonReducer(state, action);

        //Assert
        expect(nextState).toEqual(state);
   
    }); 
});