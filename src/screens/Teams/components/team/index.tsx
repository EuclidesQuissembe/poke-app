import React from 'react';

import {
  Container,
  Name,
  Country,
  Founded,
  Column,
  Logo,
  Flex,
} from './styles';

import { Props } from './types';

const Team: React.FC<Props> = ({ team, onPress }) => {
  return (
    <Container onPress={() => onPress(team)}>
      <Logo source={{ uri: team.logo }} />
      <Flex>
        <Name>{team.name}</Name>
        <Column>
          <Country>País: {team.country}</Country>
          <Founded>Fundação: {team.founded}</Founded>
        </Column>
      </Flex>
    </Container>
  );
};

export default Team;
