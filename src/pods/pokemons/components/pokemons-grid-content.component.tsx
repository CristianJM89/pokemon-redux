import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./pokemons.styles";
import { PokemonEntity } from "api/model/pokemon";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import React from "react";
import { PokemonGridBodyContent } from "./grid/pokemons-grid-body.component";
import { PokemonGridHeadContent } from "./grid/pokemons-grid-head.component";
import TablePagination from "@material-ui/core/TablePagination";
import { settings } from '../../../common-app';

interface PropsInner extends WithStyles<typeof styles>{
    pokemonList: PokemonEntity[];
    totalResults: number;
    onChangePage: (event: object, page: number) => void;
    page: number
  }
  
const PokemonsGridComponentInner = (props: PropsInner) => {
  
    const { classes } = props;
  
    return (
      <Paper className={classes.PaperGrid}>
        <Table className={classes.TableGrid}>
          <PokemonGridHeadContent />
          <PokemonGridBodyContent pokemonList={props.pokemonList} />
        </Table>
        <TablePagination
          component="div"
          style={{ textAlign: "right" }}
          rowsPerPageOptions={[settings.pageSize]}
          rowsPerPage={settings.pageSize}
          page={props.page}
          count={props.totalResults}
          onChangePage={props.onChangePage}>
        </TablePagination>
  
      </Paper>
    );
  }

export const PokemonsGridComponentContent = withStyles(styles)(PokemonsGridComponentInner) 