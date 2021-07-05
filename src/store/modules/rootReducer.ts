import { combineReducers } from 'redux';

import league from './leagues';
import seasons from './seasons';
import standings from './standings';
import teams from './teams';

export default combineReducers({
  league,
  seasons,
  standings,
  teams,
});
