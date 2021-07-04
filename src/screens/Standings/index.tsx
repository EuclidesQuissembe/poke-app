/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

// Components
import Classifications from '../../components/classifications';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Actions
import * as StandingsActions from '../../store/modules/standings/actions';

// Context
import { useApp } from '../../hooks/useApp';

// Styles
import { Container } from './styles';

// Types
import { Props } from './types';

const Standings: React.FC<Props> = ({ standings, loadRequest }) => {
  const { league, season } = useApp();

  useEffect(() => {
    loadRequest(league, season);
  }, [loadRequest]);

  if (standings.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar os anos. Por favor tente recarregar."
        onPress={() => loadRequest(league, season)}
        buttonText="Recarregar"
      />
    );
  }

  if (standings.loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Classifications data={standings.data.response} />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  standings: state.standings,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(StandingsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
