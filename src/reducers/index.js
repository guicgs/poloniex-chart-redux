import {
  REQUEST_POLONIEX_API,
  RECEIVE_POLONIEX_API_SUCCESS,
  RECEIVE_POLONIEX_API_FAILURE,
  FILTER_BY_NAME,
  SORT_TABLE,
  RECEIVE_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  filteredData: {},
  filters: {
    name: '',
    field: 'last',
    order: 'DESC',
  },
  currencies: [],
  error: '',
};

const cryptoData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POLONIEX_API:
      return { ...state, isFetching: true };
    case RECEIVE_POLONIEX_API_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case RECEIVE_POLONIEX_API_FAILURE:
      return { ...state, isFetching: false, error: action.error.toString() };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredData: action.filteredData,
        filters: { ...state.filters, name: action.name },
      };
    case SORT_TABLE:
      return {
        ...state,
        filteredData: action.data,
        filters: { ...state.filters, field: action.field },
      };
    case RECEIVE_CURRENCIES:
      return { ...state, currencies: action.data };
    default: return state;
  }
};

export default cryptoData;
