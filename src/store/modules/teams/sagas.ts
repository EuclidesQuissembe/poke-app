import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../../services/api';

import { TeamsTypes } from './types';
import { loadFailure, loadSuccess } from './actions';

import { Constants } from '../../../utils/Constants';

function* loadTeams({ payload }: any): any {
  const { query } = payload;

  try {
    const response = yield call(api.get, `/teams${query}`);

    yield AsyncStorage.setItem(
      Constants.TEAMS + `/${query}`,
      JSON.stringify(response.data),
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    const standings = yield AsyncStorage.getItem(Constants.TEAMS + `/${query}`);

    if (!standings) {
      return yield put(loadFailure());
    }

    yield put(loadSuccess(JSON.parse(standings)));
  }
}

export default takeEvery(TeamsTypes.LOAD_REQUEST, loadTeams);
