import { Dispatch, SetStateAction } from 'react';
import { Country } from '../store/modules/countries/types';

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
  league: number;
  season: number;
  countryName: string;
  teamId: number;
  setLeague: Dispatch<SetStateAction<number>>;
  setSeason: Dispatch<SetStateAction<number>>;
  setCountryName: Dispatch<SetStateAction<string>>;
  setTeamId: Dispatch<SetStateAction<number>>;
}
