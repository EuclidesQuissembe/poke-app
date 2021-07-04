import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../../services/api';

import { StandingsTypes } from './types';
import { loadSuccess, loadFailure } from './actions';

import { Constants } from '../../../utils/Constants';

function* loadLeagueAndSeason({ payload }: any): any {
  const { query } = payload;

  try {
    const response = yield call(api.get, `/standings${query}`);

    yield AsyncStorage.setItem(
      Constants.STANDINGS + `/${query}`,
      JSON.stringify(response.data),
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    const standings = yield AsyncStorage.getItem(
      Constants.STANDINGS + `/${query}`,
    );

    if (!standings) {
      return yield put(loadFailure());
    }

    yield put(loadSuccess(JSON.parse(standings)));
  }
}

export default takeEvery(StandingsTypes.LOAD_REQUEST, loadLeagueAndSeason);
