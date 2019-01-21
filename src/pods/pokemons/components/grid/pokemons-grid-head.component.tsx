import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = () => createStyles({
    tableHead: {
        backgroundColor: '#3f51b5',
    },
    tableCellStyle: {
        color: 'white',
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 'bolder',
    },
});

interface Props extends WithStyles<typeof styles> {
}

export const PokemonGridHeadContentInner = (props: Props) => {
    const { classes } = props;
    return (
        <TableHead className={classes.tableHead} >
            <TableRow >
                <TableCell className={classes.tableCellStyle}>Identifier</TableCell>
                <TableCell className={classes.tableCellStyle}>Name</TableCell>
            </TableRow>
        </TableHead >
    )
}

export const PokemonGridHeadContent = withStyles(styles)(PokemonGridHeadContentInner)