import { action } from 'typesafe-actions';
import { Team } from '../../../@types';
import { TeamsTypes, TeamsState } from './types';

export const loadRequestTeams = (countryName: string) =>
  action(TeamsTypes.LOAD_REQUEST_TEAMS, { countryName });

export const loadRequestTeam = (teamId: number) =>
  action(TeamsTypes.LOAD_REQUEST_TEAM, { teamId });

export const loadSuccessTeams = (data: TeamsState) =>
  action(TeamsTypes.LOAD_SUCCESS_TEAMS, { data });

export const loadSuccessTeam = (data: TeamsState) =>
  action(TeamsTypes.LOAD_SUCCESS_TEAM, { data });

export const loadFailureTeams = () => action(TeamsTypes.LOAD_FAILURE_TEAMS);

export const loadFailureTeam = () => action(TeamsTypes.LOAD_FAILURE_TEAM);
