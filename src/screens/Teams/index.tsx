/**
 * Modules
 */
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

// Actions
import * as TeamsActions from '../../store/modules/teams/actions';

// Components
import TeamComponent from './components/team';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Context
import { useApp } from '../../hooks/useApp';

// Types
import { Props } from './types';
import { Team } from '../../@types';

const Teams: React.FC<Props> = ({ teams, loadRequest, navigation }) => {
  const { query, setTeam, league } = useApp();

  // Set title
  navigation.setOptions({
    title: league.name,
  });

  useEffect(() => {
    loadRequest(query);
  }, [loadRequest]);

  function handleSetTeam(team: Team) {
    setTeam(team);
    navigation.navigate('Team');
  }

  if (teams.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar as equipas. Por favor tente recarregar."
        onPress={() => loadRequest(query)}
        buttonText="Recarregar"
      />
    );
  }

  if (teams.loading) {
    return <Loading />;
  }

  return (
    <FlatList
      keyExtractor={item => item.team.id.toString()}
      showsVerticalScrollIndicator={false}
      data={teams.data.response}
      renderItem={({ item }) => (
        <TeamComponent team={item.team} onPress={handleSetTeam} />
      )}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  teams: state.teams,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
