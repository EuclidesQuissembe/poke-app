import { Dispatch, SetStateAction } from 'react';
import { League } from '../store/modules/leagues/types';

export interface APIData<Data> {
  results: number;
  response: Data;
}

export interface Team {
  id: number;
  name: string;
  country: string;
  founded: string;
  national: boolean;
  logo: string;
}

export interface AppContextData {
  isConnected: boolean | null;
  query: string;
  league: League;
  season: number;
  team: Team;
  setQuery: Dispatch<SetStateAction<string>>;
  setLeague: Dispatch<SetStateAction<League>>;
  setSeason: Dispatch<SetStateAction<number>>;
  setTeam: Dispatch<SetStateAction<Team>>;
}
