import { call, put, all, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';

import { TeamsTypes } from './types';
import {
  loadSuccessTeam,
  loadFailureTeams,
  loadFailureTeam,
  loadSuccessTeams,
} from './actions';

function* loadTeams({ payload }: any): any {
  try {
    const response = yield call(api.get, `/teams`);

    yield put(loadSuccessTeams(response.data));
  } catch (err) {
    yield put(loadFailureTeams());
  }
}

function* loadTeam({ payload }: any): any {
  console.log(payload.teamId);
  try {
    const response = yield call(api.get, `/team`);

    yield put(loadSuccessTeam(response.data));
  } catch (err) {
    yield put(loadFailureTeam());
  }
}

export default all([
  takeEvery(TeamsTypes.LOAD_REQUEST_TEAMS, loadTeams),
  takeEvery(TeamsTypes.LOAD_REQUEST_TEAM, loadTeam),
]);
