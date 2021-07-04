import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';
import { SeasonsTypes } from './types';

function* load(): any {
  try {
    const response = yield call(api.get, '/leagues-seasons');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(SeasonsTypes.LOAD_REQUEST, load);
