import { APIData, Team } from '../../../@types';

export enum TeamsTypes {
  LOAD_REQUEST = '@teams/LOAD_REQUEST`',
  LOAD_SUCCESS = '@teams/LOAD_SUCCESS',
  LOAD_FAILURE = '@teams/LOAD_FAILURE',
}

export interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface TeamsData {
  team: Team;
  venue: Venue;
}

export interface TeamsState {
  readonly data: APIData<TeamsData[]>;
  readonly loading: boolean;
  readonly error: boolean;
}
