import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { CardActions, IconButton } from '@material-ui/core';
import { PokemonDetailsVM } from '../pokemon-details.vm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';


const styles = theme => createStyles({
    actions: {
        display: 'flex',
        justifyContent: 'center',
    }
});

interface Props extends WithStyles<typeof styles> {
    pokemonDetails: PokemonDetailsVM;
}

const PokemonActionsInner = (props: Props) => {
    const { classes } = props;
    return (
        <CardActions className={classes.actions} disableActionSpacing>
            <Link to="/" aria-label="Back" style={{padding: '12px'}}>
                <ArrowBackIcon />
            </Link>
            <IconButton aria-label="Add to favorites" onClick={() => { alert(props.pokemonDetails.name + ' Added as a favorite') }}>
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share" onClick={() => { alert(props.pokemonDetails.name + ' shared') }}>
                <ShareIcon />
            </IconButton>
        </CardActions>

    )
}

export const PokemonActions = withStyles(styles)(PokemonActionsInner);