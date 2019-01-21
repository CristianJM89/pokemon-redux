import * as React from 'react';
import { SingleView } from '../layout';
import { PokemonDetailsContainer } from '../pods/pokemon-detail/pokemon-details.container';

export const ScenePokemonDetails: React.StatelessComponent = () => 
 <SingleView>
    <PokemonDetailsContainer />
  </SingleView>