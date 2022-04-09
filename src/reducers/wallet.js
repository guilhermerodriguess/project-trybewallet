import { FETCH_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const handleData = (currencies) => Object
  .keys(currencies)
  .filter((currency) => currency !== 'USDT');

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      currencies: handleData(action.data),
    };
  default:
    return state;
  }
};

export default wallet;
