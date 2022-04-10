import { FETCH_API, SAVE_FORM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const handleData = (currencies) => Object
  .keys(currencies)
  .filter((currency) => currency !== 'USDT');

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: handleData(action.data),
    };
  case SAVE_FORM:
    return {
      ...state,
      expenses: [...state.expenses, action.form],
    };
  default:
    return state;
  }
};

export default wallet;
