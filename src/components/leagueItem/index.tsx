import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Container, ContainerInfo, Name, Type, Logo} from './styles';

const LeagueItem: React.FC = () => {
  return (
    <Container>
      <Logo
        source={{uri: 'https://media.api-sports.io/football/leagues/570.png'}}
      />
      <ContainerInfo>
        <Name>Meu nome</Name>
        <Type>Tipo de League</Type>
      </ContainerInfo>
      <MaterialIcons name="keyboard-arrow-right" />
    </Container>
  );
};

export default LeagueItem;
