import * as React from 'react'
import { WithStyles, withStyles, Typography } from '@material-ui/core';
import { styles } from './pokemon-filter.styles';

interface Props extends WithStyles<typeof styles> {
}
const PokemonFilterTitleComponentInner = (props : Props) => {
    const { classes } = props;

    return (
        <Typography id="titleId" className={classes.title}>
            Pokemon searcher
        </Typography>
    
        )
    }

export const PokemonFilterTitleComponent = withStyles(styles)(PokemonFilterTitleComponentInner);