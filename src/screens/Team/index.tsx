/**
 * Modules
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

// Components
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Actions
import * as TeamsActions from '../../store/modules/teams/actions';

// Context
import { useApp } from '../../hooks/useApp';

// Styles
import {
  Container,
  Logo,
  FoundationYear,
  Name,
  Country,
  VenueName,
  VenueImage,
  Adrress,
  City,
  Capaciity,
  Surface,
  Flex,
  Bold,
} from './styles';

// Types
import { Props } from './types';

const Team: React.FC<Props> = ({ team, loadRequest, navigation }) => {
  const { team: t } = useApp();

  // Set title
  navigation.setOptions({
    title: t.name,
  });

  useEffect(() => {
    loadRequest(`?id=${t.id}`);
  }, [loadRequest]);

  if (team.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar os anos. Por favor tente recarregar."
        onPress={() => loadRequest(`?id=${t.id}`)}
        buttonText="Recarregar"
      />
    );
  }

  if (team.loading) {
    return <Loading />;
  }

  const { team: equip, venue } = team.data.response[0];

  return (
    <Container>
      <Flex>
        <Logo source={{ uri: equip.logo }} />
        <Name>{equip.name}</Name>
      </Flex>
      <Country>
        País: <Bold>{equip.country}</Bold>
      </Country>
      <FoundationYear>
        Fundação: <Bold>{equip.founded}</Bold>
      </FoundationYear>

      <VenueImage source={{ uri: venue.image }} />
      <VenueName>{venue.name}</VenueName>
      <Adrress>{venue.address}</Adrress>
      <City>
        Cidade: <Bold>{venue.city}</Bold>
      </City>
      <Capaciity>
        Capacidade: <Bold>{venue.capacity}</Bold>
      </Capaciity>
      <Surface>{venue.surface}</Surface>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  team: state.teams,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
