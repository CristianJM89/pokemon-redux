/*
import { filterReducer } from "./filter.reducer";
import { actionsEnums } from "../../../common-app/actions";

const deepFreeze = require("deep-freeze");

describe('pokemons/reducer/filterReducer tests', () => {
    it('should return initial state when passing undefined state and some action type', () => {
        // Arrange
        const state = undefined;
        const action = { type: 'some type' };

        // Act
        const nextState = filterReducer(state, action);

        // Assert
        expect(nextState.value).toBeDefined();
    });

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: string = 'test value';

        const action = { type: 'some type' };
        deepFreeze(state);

        // Act
        const nextState = filterReducer(state, action);

        // Assert
        expect(nextState.value).toEqual('test value');
    });

    it(`should return updated state without mutate it when passing state, 
    FILTER_POKEMONS action type and login field payload`, () => {
            // Arrange
            const state: string = 'test title';

            const action = {
                type: actionsEnums.FILTER_POKEMONS,
                payload: 'different title',
            };

            deepFreeze(state);

            // Act
            const nextState = filterReducer(state, action);

            // Assert
            expect(nextState.value).toEqual('different title');
        });
})  
*/