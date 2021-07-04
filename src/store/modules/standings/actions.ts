import { action } from 'typesafe-actions';
import { StandingsState, StandingsTypes } from './types';

export const loadRequest = (query: string) =>
  action(StandingsTypes.LOAD_REQUEST, { query });

export const loadSuccess = (data: StandingsState) =>
  action(StandingsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(StandingsTypes.LOAD_FAILURE);
