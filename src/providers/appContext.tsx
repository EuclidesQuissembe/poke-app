/**
 * Modules
 */
import React, { createContext, useState } from 'react';
import { AppContextData } from '../@types';

/**
 *  Create context
 */
export const AppContext = createContext<AppContextData>({} as AppContextData);

/**
 * Create Provider
 */
export const AppProvider: React.FC = ({ children }) => {
  const [league, setLeague] = useState<number>(0);
  const [season, setSeason] = useState<number>(0);
  const [countryName, setCountryName] = useState<string>('');
  const [teamId, setTeamId] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        league,
        season,
        countryName,
        teamId,
        setLeague,
        setSeason,
        setCountryName,
        setTeamId,
      }}>
      {children}
    </AppContext.Provider>
  );
};
