/**
 * Modules
 */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Styles
import {Container, ContainerInfo, Name, Type, Logo} from './styles';

// Types
import {Props} from './types';

const LeagueItem: React.FC<Props> = ({name, type, logo, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Logo source={{uri: logo}} />
      <ContainerInfo>
        <Name>{name}</Name>
        <Type>{type}</Type>
      </ContainerInfo>
      <MaterialIcons name="keyboard-arrow-right" size={20} />
    </Container>
  );
};

export default LeagueItem;
