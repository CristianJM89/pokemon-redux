import * as React from 'react'
import { WithStyles, withStyles, Button } from '@material-ui/core';
import { styles } from './filter-styles';
import { PokemonFilter } from '../../pokemons.vm';

interface Props extends WithStyles<typeof styles> {
    pokemonFilter: PokemonFilter,
    onApplyFilter: (pokemonFilter : PokemonFilter) => void,
}
const MoviesFilterApplyButtonComponentInner = (props : Props) => {

    const { classes } = props;

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onApplyFilter(props.pokemonFilter)}
        >
        Apply filter
        </Button>
    
        )
    }

export const MoviesFilterApplyButtonComponent = withStyles(styles)(MoviesFilterApplyButtonComponentInner);