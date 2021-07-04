/**
 * Modules
 */
import React, { createContext, useState } from 'react';
import { AppContextData, Team } from '../@types';
import { League } from '../store/modules/leagues/types';

/**
 *  Create context
 */
export const AppContext = createContext<AppContextData>({} as AppContextData);

/**
 * Create Provider
 */
export const AppProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState<string>('');
  const [league, setLeague] = useState<League>({} as League);
  const [season, setSeason] = useState<number>(0);
  const [countryName, setCountryName] = useState<string>('');
  const [team, setTeam] = useState<Team>({} as Team);

  return (
    <AppContext.Provider
      value={{
        league,
        season,
        countryName,
        team,
        setLeague,
        setSeason,
        setCountryName,
        setTeam,
        query,
        setQuery,
      }}>
      {children}
    </AppContext.Provider>
  );
};
