/**
 * Modules
 */
import React from 'react';
import {View, Text} from 'react-native';

// Components
// import LeagueList from '../../components/leagueList/index';
import LeagueItem from '../../components/leagueItem';

// Styles
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeagueItem />
    </Container>
  );
};

export default Home;
