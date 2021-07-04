import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LeagueState } from './modules/leagues/types';
import { SeasonsState } from './modules/seasons/types';
import { StandingsState } from './modules/standings/types';
import { CountriesState } from './modules/countries/types';
import { TeamsState } from './modules/teams/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  league: LeagueState;
  seasons: SeasonsState;
  standings: StandingsState;
  countries: CountriesState;
  teams: TeamsState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
