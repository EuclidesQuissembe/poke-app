import {call, put, takeEvery} from 'redux-saga/effects';
import api from '../../../services/api';
import {loadFailure, loadSuccess} from './actions';
import {LeaguesTypes} from './types';

function* load(): any {
  try {
    const response = yield call(api.get, '/leagues');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(LeaguesTypes.LOAD_REQUEST, load);
