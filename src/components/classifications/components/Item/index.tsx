/**
 * Modules
 */
import React from 'react';
import { FlatList } from 'react-native';

import Standings from '../standings';

// Styles
import { Container, Name, Season, Country, Flag, Logo } from './styles';

// Types
import { Props } from './types';

const Item: React.FC<Props> = ({ league }) => {
  return (
    <Container>
      <Logo source={{ uri: league.logo }} />
      <Flag source={{ uri: league.flag }} />
      <Name>{league.name}</Name>
      <Season>{league.season}</Season>
      <Country>{league.country}</Country>

      <FlatList
        contentContainerStyle={{ backgroundColor: 'red' }}
        keyExtractor={(_, index) => index.toString()}
        data={league.standings}
        renderItem={({ item }) => <Standings standings={item} />}
      />
    </Container>
  );
};

export default Item;
