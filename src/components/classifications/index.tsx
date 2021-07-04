/**
 * Modules
 */
import React from 'react';
import { FlatList } from 'react-native';

// Components
import Item from './components/Item';

// Styles
import { Container } from './styles';

// Props
import { Props } from './types';

const Classifications: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <FlatList
        keyExtractor={item => item.league.id.toString()}
        data={data}
        renderItem={({ item }) => <Item league={item.league} />}
      />
    </Container>
  );
};

export default Classifications;
