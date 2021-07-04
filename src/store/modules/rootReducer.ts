import {combineReducers} from 'redux';

import league from './leagues';
import seasons from './seasons';
import standings from './standings';

export default combineReducers({
  league,
  seasons,
  standings,
});
