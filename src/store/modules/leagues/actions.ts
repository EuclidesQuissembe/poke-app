import {action} from 'typesafe-actions';
import {LeagueData, LeaguesTypes} from './types';

export const loadRequest = () => action(LeaguesTypes.LOAD_REQUEST);

export const loadSuccess = (data: LeagueData) =>
  action(LeaguesTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(LeaguesTypes.LOAD_FAILURE);
