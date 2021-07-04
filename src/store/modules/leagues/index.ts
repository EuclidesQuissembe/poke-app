import {Reducer} from 'redux';
import {LeagueState, LeaguesTypes} from './types';

const INITIAL_STATE: LeagueState = {
  data: {
    results: 0,
    response: [],
  },
  error: false,
  loading: false,
};

const reducer: Reducer<LeagueState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeaguesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LeaguesTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case LeaguesTypes.LOAD_FAILURE:
      return {
        loading: false,
        error: true,
        data: {
          results: 0,
          response: [],
        },
      };
    default:
      return state;
  }
};

export default reducer;
