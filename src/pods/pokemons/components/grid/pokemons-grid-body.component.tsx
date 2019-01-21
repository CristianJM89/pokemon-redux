
import TableBody from "@material-ui/core/TableBody";
import * as React from "react";
import { PokemonGridRowContent } from "./pokemons-grid-row.component";
import { PokemonEntity } from "api/model";

interface Props {
    pokemonList: PokemonEntity[];
}

export const PokemonGridBodyContent = (props: Props) => {
    const { pokemonList } = props;

    return (
        <TableBody>
            {pokemonList.map(pokemon => 
                <PokemonGridRowContent pokemon={pokemon} key={pokemon.id} />
            )}
        </TableBody>
    );
}
