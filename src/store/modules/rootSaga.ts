import { all } from 'redux-saga/effects';

import league from './leagues/sagas';
import seasons from './seasons/sagas';
import standings from './standings/sagas';
import teams from './teams/sagas';

export default function* rootSaga(): any {
  return yield all([league, seasons, standings, teams]);
}
