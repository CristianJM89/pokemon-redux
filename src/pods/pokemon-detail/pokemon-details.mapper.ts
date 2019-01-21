import * as PokemonApi from "../../api/model/pokemon";
import { PokemonDetailsVM } from "./pokemon-details.vm";

export const mapFromPokemonApiToPokemonViewModel = (pokemon: PokemonApi.PokemonDetailedEntity): PokemonDetailsVM => {
    return pokemon === undefined
        ?
        createDefaultPokemon()
        :
        {
            id: pokemon.id,
            name: pokemon.name,
            totalMoves: pokemon.moves.length,
            type: pokemon.types[0].type.name,
        }
}

export const createDefaultPokemon = (): PokemonDetailsVM => ({
    id: 0,
    name: "",
    totalMoves: 0,
    type: "",
});

