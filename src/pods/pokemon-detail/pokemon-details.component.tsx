import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
import { PokemonDetailsVM } from './pokemon-details.vm';
import { PokemonDetailsContent } from './components/pokemon-details-content.component';
import { PokemonActions } from './components/pokemon-details-actions.component';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getPokemonId } from './pokemon-details.container.business';

const styles = theme => createStyles({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '500px',
        overflow: 'auto',
    },
    cardHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
    }
});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
    pokemonDetails : PokemonDetailsVM;
    onload : (id: number) => void;
}

class PokemonDetailsInner extends React.PureComponent<Props, {}> {
    
    componentDidMount() {
        this.props.onload(getPokemonId(this.props.location.pathname));
    }

    render() {
        const {classes, pokemonDetails} = this.props;
        return(
            <Card className={classes.root}>
                <CardHeader title={pokemonDetails.name} className={classes.cardHeader} />
                <PokemonDetailsContent pokemonDetails={pokemonDetails} />
                <PokemonActions pokemonDetails={pokemonDetails} />
            </Card>
        )
    
    }
}

export const PokemonDetails = withStyles(styles)(withRouter<Props>(PokemonDetailsInner));
