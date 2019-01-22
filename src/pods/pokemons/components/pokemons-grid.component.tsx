import * as React from 'react';
import { Options, pokemonAPI } from '../../../api/pokemons-api';
import { settings } from '../../../common-app';
import { PokemonEntity } from 'api/model/pokemon';
import { mapFromPokemonCollectionVMToPokemonViewModel } from '../pokemons-mapper';
import { PokemonsGridComponentContent } from './pokemons-grid-content.component';

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
    this.state = { actualPage: 1, pokemonList: props.pokemonList,};
  }

  componentDidMount() { this.props.load(); }

  onChangePage = (event: object, page: number) => {
    const options: Options = {
      pageIndex: this.mapFromTablePageIndexToApiPageIndex(page),
      pageSize: settings.pageSize,
    }
    pokemonAPI.getAllPokemons(options).then(
      pokemonList => { this.setState({
          actualPage: page, 
          pokemonList: mapFromPokemonCollectionVMToPokemonViewModel(pokemonList.pokemons),});
      }
    );
  }

  mapFromTablePageIndexToApiPageIndex = (page: number): number => {
    return page + 1
  }

  render() {
    return (
      <PokemonsGridComponentContent pokemonList={this.state.pokemonList} onChangePage={this.onChangePage} page={this.state.actualPage} totalResults={this.props.totalResults} />
    )
  }
}