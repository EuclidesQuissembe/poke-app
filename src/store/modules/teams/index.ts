import { Reducer } from 'redux';
import { TeamsTypes, TeamsState } from './types';

const INITIAL_STATE: TeamsState = {
  data: {
    results: 0,
    response: [],
  },
  loading: false,
  error: false,
};

const reducer: Reducer<TeamsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TeamsTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case TeamsTypes.LOAD_FAILURE:
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
