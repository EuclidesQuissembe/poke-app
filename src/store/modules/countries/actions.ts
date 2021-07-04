import { action } from 'typesafe-actions';
import { CountriesState, CountriesTypes } from './types';

export const loadRequest = () => action(CountriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: CountriesState) =>
  action(CountriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(CountriesTypes.LOAD_FAILURE);
