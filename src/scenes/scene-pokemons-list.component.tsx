import * as React from 'react';
import { FlexView } from '../layout';
import { PokemonFilterContainer, PokemonsGridContainer } from '../pods/pokemons';

export const ScenePokemonList: React.StatelessComponent = () => 
  <FlexView>
    <PokemonFilterContainer />
    <PokemonsGridContainer />
  </FlexView>