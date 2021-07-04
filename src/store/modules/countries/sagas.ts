import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';

import { CountriesTypes } from './types';
import { loadSuccess, loadFailure } from './actions';

function* load(): any {
  try {
    const response = yield call(api.get, `/countries`);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(CountriesTypes.LOAD_REQUEST, load);
