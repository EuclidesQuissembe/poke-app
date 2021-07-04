import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LeagueState } from './modules/leagues/types';
import { SeasonsState } from './modules/seasons/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { StandingsState } from './modules/standings/types';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  league: LeagueState;
  seasons: SeasonsState;
  standings: StandingsState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
