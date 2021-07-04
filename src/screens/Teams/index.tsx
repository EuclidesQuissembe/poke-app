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
import Team from './components/team';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Context
import { useApp } from '../../hooks/useApp';

// Types
import { Props } from './types';

const Teams: React.FC<Props> = ({ teams, loadRequestTeams, navigation }) => {
  const { countryName, setTeamId } = useApp();

  useEffect(() => {
    loadRequestTeams(countryName);
  }, [loadRequestTeams]);

  function handleSetTeam(teamId: number) {
    setTeamId(teamId);
    navigation.navigate('Team');
  }

  if (teams.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar os anos. Por favor tente recarregar."
        onPress={() => loadRequestTeams(countryName)}
        buttonText="Recarregar"
      />
    );
  }

  if (teams.loading) {
    return <Loading />;
  }

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: '#fff' }}
      keyExtractor={item => item.team.id.toString()}
      data={teams.data.response}
      renderItem={({ item }) => (
        <Team team={item.team} onPress={handleSetTeam} />
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
