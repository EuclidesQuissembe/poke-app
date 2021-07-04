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
import { Container } from './styles';

// Context
import { useApp } from '../../hooks/useApp';

// Components
import LeagueList from './components/leagueList';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Types
import { Props } from './types';
import { League } from '../../store/modules/leagues/types';

const Home: React.FC<Props> = ({ leagues, loadRequest, navigation }) => {
  const { setLeague } = useApp();

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  function handleSetLeague(league: League) {
    setLeague(league);

    navigation.navigate('Seasons');
  }

  if (leagues.error) {
    return (
      <Custom
        title="Falha ao buscar as ligas"
        message="Houve um erro ao tentar pegar as ligas. Por favor tente recarregar."
        onPress={() => loadRequest()}
        buttonText="Recarregar"
      />
    );
  }

  if (leagues.loading) {
    return <Loading />;
  }

  return (
    <Container>
      <LeagueList data={leagues.data} onItemPress={handleSetLeague} />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  leagues: state.league,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LeagueActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
