import {
  EDIT_EXPENSE,
  FETCH_API,
  REMOVE_EXPENSE,
  SAVE_FORM,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpense: false,
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
      expenses: state.expenses.some(({ id }) => id === action.form.id) ? (
        state.expenses.map((expense) => {
          if (expense.id === action.form.id) {
            return { ...expense, ...action.form };
          }
          return expense;
        })
      ) : [...state.expenses, action.form],
      editExpense: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((acc) => acc.id !== action.id),
      editExpense: false,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: !state.editExpense,
    };
  default:
    return state;
  }
};

export default wallet;
