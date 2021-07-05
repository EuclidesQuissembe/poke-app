/**
 * Modules
 */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Styles
import { Container, ContainerInfo, Name, Type, Logo } from './styles';

// Types
import { Props } from './types';

const LeagueItem: React.FC<Props> = ({ league, onPress }) => {
  return (
    <Container onPress={() => onPress(league)}>
      <Logo source={{ uri: league.logo }} />
      <ContainerInfo>
        <Name>{league.name}</Name>
        <Type>{league.type}</Type>
      </ContainerInfo>
      <MaterialIcons name="keyboard-arrow-right" size={20} />
    </Container>
  );
};

export default LeagueItem;
