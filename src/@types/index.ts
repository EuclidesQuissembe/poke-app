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
  query: string;
  league: League;
  season: number;
  countryName: string;
  team: Team;
  setQuery: Dispatch<SetStateAction<string>>;
  setLeague: Dispatch<SetStateAction<League>>;
  setSeason: Dispatch<SetStateAction<number>>;
  setCountryName: Dispatch<SetStateAction<string>>;
  setTeam: Dispatch<SetStateAction<Team>>;
}
