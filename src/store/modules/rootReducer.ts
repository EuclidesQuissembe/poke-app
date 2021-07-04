import { combineReducers } from 'redux';

import league from './leagues';
import seasons from './seasons';
import standings from './standings';
import countries from './countries';
import teams from './teams';

export default combineReducers({
  league,
  seasons,
  standings,
  countries,
  teams,
});
