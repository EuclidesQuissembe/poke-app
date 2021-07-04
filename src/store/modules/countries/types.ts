import { APIData } from '../../../@types';

export enum CountriesTypes {
  LOAD_REQUEST = '@countries/LOAD_REQUEST',
  LOAD_SUCCESS = '@countries/LOAD_SUCCESS',
  LOAD_FAILURE = '@countries/LOAD_FAILURE',
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface CountriesState {
  readonly data: APIData<Country[]>;
  readonly loading: boolean;
  readonly error: boolean;
}
