/**
 * Modules
 */
import React from 'react';

// Styles
import { Container, Text } from './styles';

// Props
import { Props } from './types';

const SeasonItem: React.FC<Props> = ({ year, onPress }) => {
  return (
    <Container onPress={() => onPress(year)} style={{ elevation: 2 }}>
      <Text>{year}</Text>
    </Container>
  );
};

export default SeasonItem;
