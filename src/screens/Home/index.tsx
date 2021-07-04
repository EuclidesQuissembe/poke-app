/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Redux
import { ApplicationState } from '../../store';

// Actions
import * as LeagueActions from '../../store/modules/leagues/actions';

// Styles
import { Container } from './styles'

// Components
import LeagueList from './components/leagueList';

// Types
import { Props } from './types';

const Home: React.FC<Props> = ({ leagues, loadRequest, navigation }) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  if (leagues.error) {
    // return <Text>Erro</Text>;
  }

  if (leagues.loading) {
    return <Text>Loading</Text>;
  }

  return (
    <Container>
      <LeagueList
        data={leagues.data}
        onItemPress={() => navigation.navigate('Seasons')}
      />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  leagues: state.league,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LeagueActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
