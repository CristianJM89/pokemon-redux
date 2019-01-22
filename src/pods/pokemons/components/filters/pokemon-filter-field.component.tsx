import * as React from 'react'
import { WithStyles, withStyles, InputBase } from '@material-ui/core';
import { styles } from './pokemon-filter.styles';

interface Props extends WithStyles<typeof styles> {
    title: string,
    onUpdateTitle: (filter: string) => void,
}
const PokemonFilterFieldComponentInner = (props: Props) => {

    const { classes } = props;

    return (
        <div className={classes.search}>
            <InputBase
                id="fieldId"
                placeholder="Escribe el nombre o id del pokemon..."
                className={classes.fieldText}
                value={props.title}
                onChange={(event) => props.onUpdateTitle(event.target.value)}
            />
        </div>
    )
}

export const PokemonFilterFieldComponent = withStyles(styles)(PokemonFilterFieldComponentInner);

