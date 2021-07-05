import { APIData, Team } from '../../../@types';

export enum StandingsTypes {
  LOAD_REQUEST = '@standings/LOAD_REQUEST',
  LOAD_SUCCESS = '@standings/LOAD_SUCCESS',
  LOAD_FAILURE = '@standings/LOAD_FAILURE',
}

export interface Goals {
  for: number;
  against: number;
}

export interface Match {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Standings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Match;
  home: Match;
  away: Match;
  update: string;
}

export interface StandingsData {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: [Standings[]];
}

export interface StandingsResponse {
  league: StandingsData;
}

export interface StandingsState {
  readonly data: APIData<StandingsResponse[]>;
  readonly loading: boolean;
  readonly error: boolean;
}
