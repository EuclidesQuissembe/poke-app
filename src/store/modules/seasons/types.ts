import {APIData} from '../../../@types';

export enum SeasonsTypes {
  LOAD_REQUEST = '@seasons/LOAD_REQUEST',
  LOAD_SUCCESS = '@seasons/LOAD_SUCCESS',
  LOAD_FAILURE = '@seasons/LOAD_FAILURE',
}

export interface SeasonsState {
  readonly data: APIData<number[]>;
  readonly loading: boolean;
  readonly error: boolean;
}
