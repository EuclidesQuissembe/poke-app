import { Reducer } from 'redux';
import { StandingsState, StandingsTypes } from './types';

const INITIAL_STATE: StandingsState = {
  data: {
    results: 0,
    response: [],
  },
  loading: false,
  error: false,
};

const reducer: Reducer<StandingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StandingsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case StandingsTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case StandingsTypes.LOAD_FAILURE:
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
