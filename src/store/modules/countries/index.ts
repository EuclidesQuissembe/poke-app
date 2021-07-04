import { Reducer } from 'redux';
import { CountriesState, CountriesTypes } from './types';

const INITIAL_STATE: CountriesState = {
  data: {
    results: 0,
    response: [],
  },
  loading: false,
  error: false,
};

const reducer: Reducer<CountriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CountriesTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CountriesTypes.LOAD_FAILURE:
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
