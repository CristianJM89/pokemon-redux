import { actionsEnums } from "../../../common-app/actions";

export function filterPokemons(text) {
    return {
      type: actionsEnums.FILTER_POKEMONS,
      payload: {
        filter: text
      }
    };
  }
