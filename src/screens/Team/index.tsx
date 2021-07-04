/**
 * Modules
 */
import React from 'react';

// Styles
import {Container, Logo, FoundationYear, Name, Country} from './styles';

// Types
import {Props} from './types';

const Team: React.FC<Props> = ({name, country, foundationYear, logo}) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Country>{country}</Country>
      <FoundationYear>{foundationYear}</FoundationYear>
    </Container>
  );
};

export default Team;
