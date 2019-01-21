import * as React from 'react';
import { CardContent } from '@material-ui/core';
import { PokemonDetailsVM } from '../pokemon-details.vm';
import { PokemonDetailsBody } from './pokemon-details-body.component';

interface Props {
    pokemonDetails: PokemonDetailsVM;
}

export const PokemonDetailsContent = (props: Props) =>
    <CardContent>
        <PokemonDetailsBody pokemonDetails={props.pokemonDetails} />
    </CardContent>
