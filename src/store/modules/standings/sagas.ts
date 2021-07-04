import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';

import { StandingsTypes } from './types';
import { loadSuccess, loadFailure } from './actions';

function* loadLeagueAndSeason({ payload }: any): any {
  const { league, season } = payload;

  try {
    const response = yield call(
      api.get,
      // `/standings?league=${league}&season=${season}`,
      `/standings`,
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(StandingsTypes.LOAD_REQUEST, loadLeagueAndSeason);
