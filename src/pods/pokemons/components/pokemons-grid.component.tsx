import * as React from 'react';
import { TablePagination, Table } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { PokemonGridHeadContent } from './grid/pokemons-grid-head.component';
import { PokemonGridBodyContent } from './grid/pokemons-grid-body.component';
import { Options, pokemonAPI } from '../../../api/pokemons-api';
import { settings } from '../../../common-app';
import { PokemonEntity } from 'api/model/pokemon';
import { mapFromPokemonCollectionVMToPokemonViewModel } from '../pokemons-mapper';

interface PropsInner {
  pokemonList: PokemonEntity[];
  totalResults: number;
  onChangePage: (event: object, page: number) => void;
  page: number
}

const PokemonsGridComponentInner = (props: PropsInner) => {

  return (
    <Paper style=
      {{
        width: '40%',
        marginTop: '1%',
        overflowX: 'auto',
        marginLeft: '30%',
        marginRight: '30%',
      }}>
      <Table style=
        {{
          minWidth: '300',
        }}>
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

interface State {
  actualPage: number;
  pokemonList: PokemonEntity[];
}

interface Props {
  load: () => void;
  pokemonList: PokemonEntity[];
  totalResults: number;
}

export class PokemonsGridComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      actualPage: 1,
      pokemonList: props.pokemonList,
    }
  }

  componentDidMount() {
    this.props.load();
  }

  onChangePage = (event: object, page: number) => {
    const options: Options = {
      pageIndex: this.mapFromTablePageIndexToApiPageIndex(page),
      pageSize: settings.pageSize,
    }
    pokemonAPI.getAllPokemons(options).then(
      pokemonList => {
        this.setState({
          actualPage: page, 
          pokemonList: mapFromPokemonCollectionVMToPokemonViewModel(pokemonList.pokemons),
        });
      }
    );
  }

  mapFromTablePageIndexToApiPageIndex = (page: number): number => {
    return page + 1
  }

  render() {
    return (
      <PokemonsGridComponentInner pokemonList={this.state.pokemonList} onChangePage={this.onChangePage} page={this.state.actualPage} totalResults={this.props.totalResults} />
    )
  }
}