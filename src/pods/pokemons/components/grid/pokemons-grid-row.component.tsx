import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import { Link } from "react-router-dom";
import { navigationRoutes } from "../../../../common-app/router";
import { PokemonEntity } from "../../pokemons.vm";

interface Props extends WithStyles<typeof styles> {
    pokemon: PokemonEntity;
}

const styles = () => createStyles({
    pokemon: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
        },
        fontFamily: "Roboto",   
    },
});

export const PokemonGridRowContentInner = (props: Props) => {
    const { classes, pokemon } = props;

    return (
        <TableRow className={classes.pokemon} >
            <TableCell component="td" scope="row">
                <Link to={navigationRoutes.pokemonDetail(pokemon.id)} style={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: '#06c',
                }}>{pokemon.id}</Link>
            </TableCell>
            <TableCell style={{ textTransform: 'capitalize'}} align="right">{pokemon.name}</TableCell>
        </TableRow>
    );
}

export const PokemonGridRowContent = withStyles(styles)(PokemonGridRowContentInner)