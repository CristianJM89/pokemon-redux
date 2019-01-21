import * as React from 'react';
import { Typography, WithStyles, createStyles, withStyles } from '@material-ui/core';
import { PokemonDetailsVM } from '../pokemon-details.vm';

const styles = theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: "border-box"
    },
    detailTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: 'auto',
        flexBasis: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 1,
        minHeight: '332px',
        minWidth: '220px',
        boxSizing: "border-box",
    },
    pokemonBody: {
        textAlign: 'justify',
        flexBasis: '80%',
        padding: '1rem 7rem',
        flexGrow: 1,
        boxSizing: "border-box",
    }
});

interface Props extends WithStyles<typeof styles> {
    pokemonDetails: PokemonDetailsVM;
}
interface InternalProps {
    type: string;
    value: any;
}

const PokemonDetailsSubtitle = (props: InternalProps) =>
    <span style={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography variant={'h6'} style={{ width: '120px', textTransform: 'capitalize', }}>{props.type}</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant={'subheading'} style={{ width: '120px', textTransform: 'capitalize', }}>{props.value}</Typography>
    </span>

const PokemonDetailsBodyInner = (props: Props) =>
    <div className={props.classes.root}>
        <div className={props.classes.pokemonBody}>
            <PokemonDetailsSubtitle type={'Name:'} value={props.pokemonDetails.name} />
            <PokemonDetailsSubtitle type={'Total moves:'} value={`${props.pokemonDetails.totalMoves} moves`} />
            <PokemonDetailsSubtitle type={'Type:'} value={props.pokemonDetails.type} />
        </div>
    </div>

export const PokemonDetailsBody = withStyles(styles)(PokemonDetailsBodyInner)