import { APIData, Team } from '../../../@types';

export enum TeamsTypes {
  LOAD_REQUEST_TEAMS = '@teams/LOAD_REQUEST_TEAMS',
  LOAD_REQUEST_TEAM = '@teams/LOAD_REQUEST_TEAM',
  LOAD_SUCCESS_TEAMS = '@teams/LOAD_SUCCESS_TEAMS',
  LOAD_SUCCESS_TEAM = '@teams/LOAD_SUCCESS_TEAM',
  LOAD_FAILURE_TEAMS = '@teams/LOAD_FAILURE_TEAMS',
  LOAD_FAILURE_TEAM = '@teams/LOAD_FAILURE_TEAM',
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
