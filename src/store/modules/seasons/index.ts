import {Reducer} from 'redux';
import {SeasonsState, SeasonsTypes} from './types';

const INITIAL_STATE: SeasonsState = {
  data: {
    results: 0,
    response: [],
  },
  error: false,
  loading: false,
};

const reducer: Reducer<SeasonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SeasonsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SeasonsTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case SeasonsTypes.LOAD_FAILURE:
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
