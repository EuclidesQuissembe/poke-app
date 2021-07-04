import {action} from 'typesafe-actions';
import {StandingsState, StandingsTypes} from './types';

export const loadRequest = (league: number, season: number) =>
  action(StandingsTypes.LOAD_REQUEST, {league, season});

export const loadSuccess = (data: StandingsState) =>
  action(StandingsTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(StandingsTypes.LOAD_FAILURE);
