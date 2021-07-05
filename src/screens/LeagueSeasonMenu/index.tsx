/**
 * Modules
 */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

// Screens Props
import { RootListScreensProps } from '../../@types/screens';

// Context
import { useApp } from '../../hooks/useApp';

// Styles
import { Container, Title, Logo, Button, ButtonText, Season } from './styles';

const LeagueSeasonMenu: React.FC<StackScreenProps<RootListScreensProps>> = ({
  navigation,
}) => {
  const { league, season, setQuery } = useApp();

  function handleShowTeams() {
    setQuery(`?league=${league.id}&season=${season}`);

    navigation.navigate('Teams');
  }

  return (
    <Container>
      <Logo source={{ uri: league.logo }} />
      <Title>{league.name}</Title>
      <Season>{season}</Season>
      <Button
        activeOpacity={0.8}
        onPress={handleShowTeams}
        style={{ elevation: 2 }}>
        <ButtonText>Equipas</ButtonText>
      </Button>
      <Button
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Standings')}
        style={{ elevation: 2 }}>
        <ButtonText>Classificações</ButtonText>
      </Button>
    </Container>
  );
};

export default LeagueSeasonMenu;
