import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import { PokemonDetailsVM } from '../pokemon-details.vm';
import { styles } from './pokemon-details.styles.component';
import { PokemonDetailsSubtitle } from './pokemon-details-subtitle.component';

interface Props extends WithStyles<typeof styles> {
    pokemonDetails: PokemonDetailsVM;
}

const PokemonDetailsBodyInner = (props: Props) =>
    <div className={props.classes.root}>
        <div className={props.classes.pokemonBody}>
            <PokemonDetailsSubtitle type={'Name:'} value={props.pokemonDetails.name} />
            <PokemonDetailsSubtitle type={'Total moves:'} value={`${props.pokemonDetails.totalMoves} moves`} />
            <PokemonDetailsSubtitle type={'Type:'} value={props.pokemonDetails.type} />
        </div>
    </div>

export const PokemonDetailsBody = withStyles(styles)(PokemonDetailsBodyInner)



