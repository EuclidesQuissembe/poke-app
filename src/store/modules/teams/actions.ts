import { action } from 'typesafe-actions';
import { TeamsTypes, TeamsState } from './types';

export const loadRequest = (query: string) =>
  action(TeamsTypes.LOAD_REQUEST, { query });

export const loadSuccess = (data: TeamsState) =>
  action(TeamsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(TeamsTypes.LOAD_FAILURE);
