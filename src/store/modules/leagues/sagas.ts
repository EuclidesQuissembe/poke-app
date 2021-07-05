import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';
import { LeaguesTypes } from './types';

import { Constants } from '../../../utils/Constants';

function* load(): any {
  try {
    const response = yield call(api.get, '/leagues');

    /// Save data for offline access
    yield AsyncStorage.setItem(
      Constants.LEAGUES,
      JSON.stringify(response.data),
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    // Get offline data
    const leagues = yield AsyncStorage.getItem(Constants.LEAGUES);

    if (!leagues) {
      return yield put(loadFailure());
    }

    yield put(loadSuccess(JSON.parse(leagues)));
  }
}

export default takeEvery(LeaguesTypes.LOAD_REQUEST, load);
