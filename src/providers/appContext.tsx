/**
 * Modules
 */
import React, { createContext, useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
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
  const [team, setTeam] = useState<Team>({} as Team);
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider
      value={{
        league,
        season,
        team,
        setLeague,
        setSeason,
        setTeam,
        query,
        setQuery,
        isConnected,
      }}>
      {children}
    </AppContext.Provider>
  );
};
