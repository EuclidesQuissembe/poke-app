/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

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
} from './styles';

// Types
import { Props } from './types';

const Team: React.FC<Props> = ({ team, loadRequestTeam }) => {
  const { teamId } = useApp();

  useEffect(() => {
    loadRequestTeam(teamId);
  }, [loadRequestTeam]);

  if (team.loading) {
    return <Text>Loading...</Text>;
  }

  if (team.error) {
    return <Text>Error</Text>;
  }

  const { team: equip, venue } = team.data.response[0];

  return (
    <Container>
      <Logo source={{ uri: equip.logo }} />
      <Name>{equip.name}</Name>
      <Country>{equip.country}</Country>
      <FoundationYear>Fundação: {equip.founded}</FoundationYear>

      <VenueImage source={{ uri: venue.image }} />
      <VenueName>{venue.name}</VenueName>
      <Adrress>{venue.address}</Adrress>
      <City>Cidade: {venue.city}</City>
      <Capaciity>Capacidade: {venue.capacity}</Capaciity>
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
