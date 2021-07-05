/**
 * Modules
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

import * as SeasonsActions from '../../store/modules/seasons/actions';

// Components
import SeasonList from '../../components/seasonList';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Context
import { useApp } from '../../hooks/useApp';

// Styles
import { Container } from './styles';

// Types
import { Props } from './types';

const Seasons: React.FC<Props> = ({ seasons, loadRequest, navigation }) => {
  const { setSeason, league } = useApp();

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  function handleSetSeason(season: number) {
    setSeason(season);

    navigation.navigate('LeagueSeasonMenu');
  }

  if (seasons.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar os anos. Por favor tente recarregar."
        onPress={() => loadRequest()}
        buttonText="Recarregar"
      />
    );
  }

  if (seasons.loading) {
    return <Loading />;
  }

  return (
    <Container>
      <SeasonList data={seasons.data} onItemPress={handleSetSeason} />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  seasons: state.seasons,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SeasonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
