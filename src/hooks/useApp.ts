import { useContext } from 'react';

import { AppContext } from '../providers/appContext';

export const useApp = () => {
  const context = useContext(AppContext);

  return context;
};
