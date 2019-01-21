import { actionsEnums } from "../../../common-app/actions";

export const filterReducer = (state: string = '', action) => {
    switch (action.type) {
        case actionsEnums.FILTER_POKEMONS:
            return action.payload;
    }
    return state;
}
