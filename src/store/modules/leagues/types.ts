export enum LeaguesTypes {
  LOAD_REQUEST = '@league/LOAD_REQUEST',
  LOAD_SUCCESS = '@league/LOAD_SUCCESS',
  LOAD_FAILURE = '@league/LOAD_FAILURE',
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface LeagueResponse {
  league: League;
}

export interface LeagueData {
  results: number;
  response: LeagueResponse[];
}

export interface LeagueState {
  readonly data: LeagueData;
  readonly loading: boolean;
  readonly error: boolean;
}
