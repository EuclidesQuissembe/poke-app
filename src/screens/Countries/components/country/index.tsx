import React from 'react';

import { Container, Name, Flag } from './styles';

import { Props } from './types';

const Country: React.FC<Props> = ({ country, onPress }) => {
  return (
    <Container onPress={() => onPress(country.name)}>
      <Flag source={{ uri: country.flag }} />
      <Name>{country.name}</Name>
    </Container>
  );
};

export default Country;
