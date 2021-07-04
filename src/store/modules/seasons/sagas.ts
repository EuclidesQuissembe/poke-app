import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';
import { SeasonsTypes } from './types';

import { Constants } from '../../../utils/Constants';

function* load(): any {
  try {
    const response = yield call(api.get, '/leagues/seasons');

    yield AsyncStorage.setItem(
      Constants.SEASONS,
      JSON.stringify(response.data),
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    const seasons = yield AsyncStorage.getItem(Constants.SEASONS);

    if (!seasons) {
      return yield put(loadFailure());
    }

    yield put(loadSuccess(JSON.parse(seasons)));
  }
}

export default takeEvery(SeasonsTypes.LOAD_REQUEST, load);
