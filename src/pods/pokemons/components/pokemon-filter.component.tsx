import * as React from 'react';
import { WithStyles, AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './filters/filter-styles';
import { PokemonFilter } from '../pokemons.vm';
import { PokemonFilterTitleComponent } from './filters/pokemon-filter-title.component';
import { PokemonFilterFieldComponent } from './filters/pokemon-filter-field.component';


interface Props extends WithStyles<typeof styles> {
  filterPokemons: (filter : string) => string,
 }

interface State {
  pokemonFilter: string,
}

class PokemonFilterComponentInner extends React.Component<Props, State> {

  state: State = {
    pokemonFilter: '',
  };

  /*updateField = (fieldId: string) => (value: string) =>
    this.setState({
      pokemonFilter: {
        ...this.state.pokemonFilter,
        [fieldId]: value
      }
    });*/

    handleFilter = (filter: string) => {
      this.props.filterPokemons(filter);
    };

  render() {
    const { classes } = this.props;
    const { pokemonFilter } = this.state;
    return (
      <>
        <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <PokemonFilterTitleComponent />
            <PokemonFilterFieldComponent title={pokemonFilter} onUpdateTitle={this.handleFilter}/>
          </Toolbar>
        </AppBar>
          
        </div>
      </>
    )
  }

}

export const PokemonFilterComponent = withStyles(styles)(PokemonFilterComponentInner);