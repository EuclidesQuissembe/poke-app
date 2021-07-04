/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

import * as SeasonsActions from '../../store/modules/seasons/actions';

// Components
import SeasonList from '../../components/seasonList';

// Styles
import { Container } from './styles';

// Types
import { Props } from './types';

const Seasons: React.FC<Props> = ({ seasons, loadRequest, navigation }) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  if (seasons.error) {
    return <Text>Erro</Text>;
  }

  if (seasons.loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <SeasonList
        data={seasons.data}
        onItemPress={() => navigation.navigate('Standings')}
      />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  seasons: state.seasons,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SeasonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
