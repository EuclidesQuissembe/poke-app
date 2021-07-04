import {action} from 'typesafe-actions';
import {APIData} from '../../../@types';
import {SeasonsTypes} from './types';

export const loadRequest = () => action(SeasonsTypes.LOAD_REQUEST);

export const loadSuccess = (data: APIData<number[]>) =>
  action(SeasonsTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(SeasonsTypes.LOAD_FAILURE);
