import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';

import { TeamsTypes } from './types';
import { loadFailure, loadSuccess } from './actions';

function* loadTeams({ payload }: any): any {
  console.log(payload.query);

  try {
    const response = yield call(api.get, `/teams`);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(TeamsTypes.LOAD_REQUEST, loadTeams);
